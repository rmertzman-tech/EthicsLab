// Simulation Engine for Coalition Ethics Lab
// Simplified Agent-Based Model for educational purposes

/**
 * Core simulation functions for running coalition scenarios
 */

// Calculate success probability based on parameters
function calculateSuccessProbability(agents, I, epsilon, task) {
  // Base success starts at 50%
  let successProb = 0.5;
  
  // Protocol complexity penalty (higher I = more friction)
  const protocolPenalty = I * 0.15;
  successProb -= protocolPenalty;
  
  // Diversity tolerance bonus (higher epsilon = better coordination across difference)
  const diversityBonus = epsilon * 0.3;
  successProb += diversityBonus;
  
  // Agent capability assessment
  const avgCapability = agents.reduce((sum, agent) => 
    sum + agent.capabilities.reduce((s, c) => s + c.level, 0) / agent.capabilities.length, 0
  ) / agents.length;
  successProb += (avgCapability - 0.5) * 0.2;
  
  // Agent diversity factor (more diverse = harder without high epsilon)
  const diversity = calculateDiversity(agents);
  const diversityPenalty = diversity * (1 - epsilon) * 0.15;
  successProb -= diversityPenalty;
  
  // Clamp between 0.05 and 0.95
  return Math.max(0.05, Math.min(0.95, successProb));
}

// Calculate ATCF (Authentic Temporal Coherence of Form) for each agent
function calculateATCF(agent, I, epsilon, timeStep) {
  let atcf = agent.initialATCF || 0.8;
  
  // Protocol pressure on identity
  const identityPressure = I * 0.1;
  atcf -= identityPressure;
  
  // Tolerance protection (high epsilon protects identity)
  const protection = epsilon * 0.15;
  atcf += protection;
  
  // Time decay (maintaining authenticity gets harder over time)
  const timeDecay = timeStep * 0.02;
  atcf -= timeDecay;
  
  // Agent's inherent resilience
  const resilience = agent.authenticity?.strength || 0.7;
  atcf += (resilience - 0.5) * 0.1;
  
  // Clamp between 0.1 and 1.0
  return Math.max(0.1, Math.min(1.0, atcf));
}

// Calculate diversity among agents (0 = homogeneous, 1 = maximally diverse)
function calculateDiversity(agents) {
  if (agents.length < 2) return 0;
  
  // Compare belief systems
  let totalDifference = 0;
  let comparisons = 0;
  
  for (let i = 0; i < agents.length; i++) {
    for (let j = i + 1; j < agents.length; j++) {
      const diff = compareAgents(agents[i], agents[j]);
      totalDifference += diff;
      comparisons++;
    }
  }
  
  return comparisons > 0 ? totalDifference / comparisons : 0;
}

// Compare two agents' beliefs (0 = identical, 1 = maximally different)
function compareAgents(agent1, agent2) {
  // Simple comparison based on belief strength differences
  const beliefs1 = agent1.beliefs.map(b => b.strength);
  const beliefs2 = agent2.beliefs.map(b => b.strength);
  
  // Calculate average difference
  let diff = 0;
  const len = Math.min(beliefs1.length, beliefs2.length);
  for (let i = 0; i < len; i++) {
    diff += Math.abs(beliefs1[i] - beliefs2[i]) / 100;
  }
  
  return len > 0 ? diff / len : 0.5;
}

// Run a single simulation step
function runSimulationStep(state, params) {
  const { agents, I, epsilon, task, timeStep } = params;
  
  // Calculate success for this step
  const successProb = calculateSuccessProbability(agents, I, epsilon, task);
  const success = Math.random() < successProb;
  
  // Update ATCF for each agent
  const updatedAgents = agents.map(agent => ({
    ...agent,
    currentATCF: calculateATCF(agent, I, epsilon, timeStep)
  }));
  
  // Calculate group metrics
  const avgATCF = updatedAgents.reduce((sum, a) => sum + a.currentATCF, 0) / updatedAgents.length;
  const minATCF = Math.min(...updatedAgents.map(a => a.currentATCF));
  
  return {
    success,
    successProb,
    agents: updatedAgents,
    avgATCF,
    minATCF,
    timeStep: timeStep + 1
  };
}

// Run complete simulation ensemble
function runEnsemble(scenario, numRuns = 20, numSteps = 10) {
  const results = {
    runs: [],
    summary: {
      avgSuccessRate: 0,
      avgFinalATCF: 0,
      minFinalATCF: 1.0,
      robustness: 0
    },
    timeSeriesData: []
  };
  
  let totalSuccesses = 0;
  let totalFinalATCF = 0;
  
  // Initialize time series structure
  for (let t = 0; t < numSteps; t++) {
    results.timeSeriesData.push({
      time: t + 1,
      avgSuccess: 0,
      avgATCF: 0,
      runs: []
    });
  }
  
  // Run multiple simulations
  for (let run = 0; run < numRuns; run++) {
    const runData = {
      runNumber: run + 1,
      steps: [],
      finalSuccess: false,
      finalATCF: 0
    };
    
    let currentState = {
      agents: scenario.agents.map(a => ({
        ...a,
        currentATCF: a.initialATCF || 0.8
      }))
    };
    
    // Run time steps
    for (let step = 0; step < numSteps; step++) {
      const stepResult = runSimulationStep(currentState, {
        agents: currentState.agents,
        I: scenario.defaultI,
        epsilon: scenario.defaultEpsilon,
        task: scenario.task,
        timeStep: step
      });
      
      runData.steps.push({
        step: step + 1,
        success: stepResult.success,
        successProb: stepResult.successProb,
        avgATCF: stepResult.avgATCF,
        minATCF: stepResult.minATCF
      });
      
      // Update time series data
      results.timeSeriesData[step].runs.push({
        success: stepResult.success ? 1 : 0,
        atcf: stepResult.avgATCF
      });
      
      currentState = {
        agents: stepResult.agents
      };
    }
    
    // Record final metrics
    const finalStep = runData.steps[runData.steps.length - 1];
    runData.finalSuccess = finalStep.success;
    runData.finalATCF = finalStep.avgATCF;
    
    totalSuccesses += finalStep.success ? 1 : 0;
    totalFinalATCF += finalStep.avgATCF;
    results.summary.minFinalATCF = Math.min(results.summary.minFinalATCF, finalStep.avgATCF);
    
    results.runs.push(runData);
  }
  
  // Calculate time series averages
  results.timeSeriesData.forEach(timePoint => {
    timePoint.avgSuccess = timePoint.runs.reduce((sum, r) => sum + r.success, 0) / timePoint.runs.length * 100;
    timePoint.avgATCF = timePoint.runs.reduce((sum, r) => sum + r.atcf, 0) / timePoint.runs.length;
  });
  
  // Calculate summary statistics
  results.summary.avgSuccessRate = (totalSuccesses / numRuns) * 100;
  results.summary.avgFinalATCF = totalFinalATCF / numRuns;
  
  // Robustness = how consistent results are across runs
  const successRates = results.runs.map(r => r.finalSuccess ? 100 : 0);
  const variance = successRates.reduce((sum, sr) => 
    sum + Math.pow(sr - results.summary.avgSuccessRate, 2), 0
  ) / numRuns;
  results.summary.robustness = Math.max(0, 100 - Math.sqrt(variance));
  
  return results;
}

// Calculate agent group metrics
function calculateGroupMetrics(agents) {
  const metrics = {
    avgATCF: 0,
    minATCF: 1.0,
    maxATCF: 0,
    atcfByGroup: {}
  };
  
  agents.forEach(agent => {
    const atcf = agent.currentATCF || agent.initialATCF || 0.8;
    metrics.avgATCF += atcf;
    metrics.minATCF = Math.min(metrics.minATCF, atcf);
    metrics.maxATCF = Math.max(metrics.maxATCF, atcf);
    
    // Group by framework
    if (!metrics.atcfByGroup[agent.framework]) {
      metrics.atcfByGroup[agent.framework] = [];
    }
    metrics.atcfByGroup[agent.framework].push(atcf);
  });
  
  metrics.avgATCF /= agents.length;
  
  // Average by framework
  Object.keys(metrics.atcfByGroup).forEach(framework => {
    const values = metrics.atcfByGroup[framework];
    metrics.atcfByGroup[framework] = values.reduce((sum, v) => sum + v, 0) / values.length;
  });
  
  return metrics;
}

// Generate visualization data for Recharts
function generateVisualizationData(ensembleResults) {
  return {
    timeSeriesData: ensembleResults.timeSeriesData.map(t => ({
      time: t.time,
      'Success Rate (%)': t.avgSuccess,
      'Avg ATCF': t.avgATCF * 100
    })),
    
    groupATCFData: Object.keys(ensembleResults.runs[0].steps[0]).length > 0 ?
      Object.entries(calculateGroupMetrics(
        ensembleResults.runs[0].steps[ensembleResults.runs[0].steps.length - 1]
      ).atcfByGroup).map(([group, atcf]) => ({
        group,
        atcf: atcf * 100
      })) : [],
    
    summaryStats: [
      { metric: 'Success Rate', value: ensembleResults.summary.avgSuccessRate },
      { metric: 'Final ATCF', value: ensembleResults.summary.avgFinalATCF * 100 },
      { metric: 'Robustness', value: ensembleResults.summary.robustness }
    ]
  };
}

// Utility: Format number for display
function formatNumber(num, decimals = 1) {
  return typeof num === 'number' ? num.toFixed(decimals) : '0.0';
}

// Utility: Get color for metric value
function getMetricColor(value, metric) {
  if (metric === 'atcf' || metric === 'success') {
    if (value >= 70) return '#22c55e'; // green
    if (value >= 40) return '#eab308'; // yellow
    return '#ef4444'; // red
  }
  return '#3b82f6'; // blue default
}

// Utility: Generate insights from results
function generateInsights(results, scenario) {
  const insights = [];
  
  // Success rate insight
  if (results.summary.avgSuccessRate >= 70) {
    insights.push({
      type: 'success',
      message: `Strong coordination! ${formatNumber(results.summary.avgSuccessRate, 0)}% success rate indicates this coalition design works well.`
    });
  } else if (results.summary.avgSuccessRate >= 40) {
    insights.push({
      type: 'warning',
      message: `Moderate success (${formatNumber(results.summary.avgSuccessRate, 0)}%). Consider adjusting I or ε to improve coordination.`
    });
  } else {
    insights.push({
      type: 'error',
      message: `Low success rate (${formatNumber(results.summary.avgSuccessRate, 0)}%). This coalition configuration needs significant redesign.`
    });
  }
  
  // ATCF insight
  if (results.summary.avgFinalATCF >= 0.7) {
    insights.push({
      type: 'success',
      message: `Excellent authenticity maintenance! Groups preserved their identity (ATCF: ${formatNumber(results.summary.avgFinalATCF * 100, 0)}%).`
    });
  } else if (results.summary.avgFinalATCF >= 0.5) {
    insights.push({
      type: 'warning',
      message: `Moderate identity preservation (ATCF: ${formatNumber(results.summary.avgFinalATCF * 100, 0)}%). Some groups may feel compromised.`
    });
  } else {
    insights.push({
      type: 'error',
      message: `Low authenticity (ATCF: ${formatNumber(results.summary.avgFinalATCF * 100, 0)}%). Groups are losing their identity - increase ε or reduce I.`
    });
  }
  
  // Robustness insight
  if (results.summary.robustness >= 80) {
    insights.push({
      type: 'success',
      message: `Highly robust design! Results are consistent across different runs (${formatNumber(results.summary.robustness, 0)}% robustness).`
    });
  } else if (results.summary.robustness >= 50) {
    insights.push({
      type: 'warning',
      message: `Moderate robustness (${formatNumber(results.summary.robustness, 0)}%). Results vary somewhat between runs.`
    });
  }
  
  // Parameter-specific insights
  if (scenario.defaultI > 0.3) {
    insights.push({
      type: 'info',
      message: `High protocol complexity (I=${scenario.defaultI}). This creates friction but may ensure quality.`
    });
  }
  
  if (scenario.defaultEpsilon > 0.35) {
    insights.push({
      type: 'info',
      message: `High tolerance for difference (ε=${scenario.defaultEpsilon}). This enables diverse coordination.`
    });
  }
  
  return insights;
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    calculateSuccessProbability,
    calculateATCF,
    calculateDiversity,
    compareAgents,
    runSimulationStep,
    runEnsemble,
    calculateGroupMetrics,
    generateVisualizationData,
    formatNumber,
    getMetricColor,
    generateInsights
  };
}