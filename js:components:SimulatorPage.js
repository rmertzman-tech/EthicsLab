// SimulatorPage Component
function SimulatorPage({ scenario, onNavigate }) {
  const [I, setI] = React.useState(scenario?.defaultI || 0.2);
  const [epsilon, setEpsilon] = React.useState(scenario?.defaultEpsilon || 0.3);
  const [numRuns, setNumRuns] = React.useState(20);
  const [numSteps, setNumSteps] = React.useState(10);
  const [results, setResults] = React.useState(null);
  const [isRunning, setIsRunning] = React.useState(false);

  const handleRunSimulation = () => {
    if (!scenario) return;
    
    setIsRunning(true);
    
    // Simulate async computation with timeout
    setTimeout(() => {
      const modifiedScenario = {
        ...scenario,
        defaultI: I,
        defaultEpsilon: epsilon
      };
      
      const ensembleResults = runEnsemble(modifiedScenario, numRuns, numSteps);
      const vizData = generateVisualizationData(ensembleResults);
      const insights = generateInsights(ensembleResults, modifiedScenario);
      
      setResults({
        ensemble: ensembleResults,
        visualization: vizData,
        insights: insights
      });
      
      setIsRunning(false);
    }, 500);
  };

  if (!scenario) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <div className="text-6xl mb-4">🎭</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">No Scenario Selected</h2>
        <p className="text-gray-600 mb-6">
          Please select a scenario from the library to begin simulation.
        </p>
        <button
          onClick={() => onNavigate('scenarios')}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Browse Scenarios
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <button
          onClick={() => onNavigate('scenarios')}
          className="text-blue-600 hover:text-blue-800 mb-2 flex items-center gap-1"
        >
          ← Back to Scenarios
        </button>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{scenario.title}</h1>
        <p className="text-gray-600">{scenario.period}</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column - Controls */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Simulation Controls</h2>

            {/* Task Description */}
            <div className="mb-6 p-3 bg-blue-50 rounded">
              <p className="text-sm font-semibold text-blue-800 mb-1">Coalition Task:</p>
              <p className="text-sm text-gray-700">{scenario.task.description}</p>
            </div>

            {/* Parameter Controls */}
            <div className="space-y-6">
              {/* Protocol Complexity (I) */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Protocol Complexity (I): {I.toFixed(2)}
                </label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={I}
                  onChange={(e) => setI(parseFloat(e.target.value))}
                  className="w-full"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Higher I = more complex rules, more friction
                </p>
              </div>

              {/* Tolerance (epsilon) */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tolerance for Difference (ε): {epsilon.toFixed(2)}
                </label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={epsilon}
                  onChange={(e) => setEpsilon(parseFloat(e.target.value))}
                  className="w-full"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Higher ε = more tolerance for different approaches
                </p>
              </div>

              {/* Ensemble Size */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Number of Runs: {numRuns}
                </label>
                <input
                  type="range"
                  min="5"
                  max="50"
                  step="5"
                  value={numRuns}
                  onChange={(e) => setNumRuns(parseInt(e.target.value))}
                  className="w-full"
                />
                <p className="text-xs text-gray-500 mt-1">
                  More runs = more reliable results
                </p>
              </div>

              {/* Time Steps */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Time Steps: {numSteps}
                </label>
                <input
                  type="range"
                  min="5"
                  max="20"
                  step="1"
                  value={numSteps}
                  onChange={(e) => setNumSteps(parseInt(e.target.value))}
                  className="w-full"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Longer timeline to observe ATCF changes
                </p>
              </div>
            </div>

            {/* Run Button */}
            <button
              onClick={handleRunSimulation}
              disabled={isRunning}
              className={`w-full mt-6 py-3 rounded-lg font-semibold transition-colors ${
                isRunning
                  ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {isRunning ? 'Running Simulation...' : 'Run Simulation'}
            </button>

            {/* Agents Info */}
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Stakeholder Groups:</h3>
              <div className="space-y-2">
                {scenario.agents.map((agent, idx) => (
                  <div key={idx} className="text-sm p-2 bg-gray-50 rounded">
                    <p className="font-semibold text-gray-800">{agent.name}</p>
                    <p className="text-xs text-gray-600">{agent.framework}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Results */}
        <div className="lg:col-span-2">
          {!results ? (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <div className="text-6xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Ready to Simulate</h3>
              <p className="text-gray-600">
                Adjust parameters on the left and click "Run Simulation" to see results
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Insights */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">📊 Key Insights</h3>
                <div className="space-y-3">
                  {results.insights.map((insight, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-lg border-l-4 ${
                        insight.type === 'success'
                          ? 'bg-green-50 border-green-500'
                          : insight.type === 'warning'
                          ? 'bg-yellow-50 border-yellow-500'
                          : insight.type === 'error'
                          ? 'bg-red-50 border-red-500'
                          : 'bg-blue-50 border-blue-500'
                      }`}
                    >
                      <p className="text-sm text-gray-800">{insight.message}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Summary Stats */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Summary Statistics</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-3xl font-bold text-blue-600">
                      {formatNumber(results.ensemble.summary.avgSuccessRate, 0)}%
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Success Rate</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-3xl font-bold text-green-600">
                      {formatNumber(results.ensemble.summary.avgFinalATCF * 100, 0)}%
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Final ATCF</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <p className="text-3xl font-bold text-purple-600">
                      {formatNumber(results.ensemble.summary.robustness, 0)}%
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Robustness</p>
                  </div>
                </div>
              </div>

              {/* Time Series Chart */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Performance Over Time</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={results.visualization.timeSeriesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" label={{ value: 'Time Step', position: 'insideBottom', offset: -5 }} />
                    <YAxis label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="Success Rate (%)"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="Avg ATCF"
                      stroke="#10b981"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Learning Reflection */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">🎯 Learning Goal</h3>
                <p className="text-gray-700">{scenario.learningGoal}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}