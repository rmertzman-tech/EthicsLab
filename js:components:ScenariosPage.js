// ScenariosPage Component
function ScenariosPage({ scenarios, onSelectScenario, onNavigate }) {
  const [selectedWeek, setSelectedWeek] = React.useState('all');

  const filteredScenarios = selectedWeek === 'all' 
    ? scenarios 
    : scenarios.filter(s => s.week === parseInt(selectedWeek));

  const getWeekColor = (week) => {
    const colors = {
      1: 'bg-blue-100 text-blue-800',
      2: 'bg-green-100 text-green-800',
      3: 'bg-purple-100 text-purple-800',
      4: 'bg-red-100 text-red-800'
    };
    return colors[week] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Historical Scenarios Library</h1>
        <p className="text-gray-600">
          Explore 6 historical cases showing when ethical frameworks work and when they fail
        </p>
      </div>

      {/* Week Filter */}
      <div className="mb-6 flex gap-2 flex-wrap">
        <button
          onClick={() => setSelectedWeek('all')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            selectedWeek === 'all' 
              ? 'bg-gray-800 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          All Scenarios
        </button>
        {[1, 2, 3, 4].map(week => (
          <button
            key={week}
            onClick={() => setSelectedWeek(week.toString())}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedWeek === week.toString()
                ? 'bg-gray-800 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Week {week}
          </button>
        ))}
      </div>

      {/* Scenarios Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredScenarios.map(scenario => (
          <div key={scenario.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            {/* Header */}
            <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-4">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-bold">{scenario.title}</h2>
                <span className={`px-2 py-1 rounded text-xs font-semibold ${getWeekColor(scenario.week)}`}>
                  Week {scenario.week}
                </span>
              </div>
              <p className="text-sm text-gray-300">{scenario.period}</p>
            </div>

            {/* Content */}
            <div className="p-4">
              <p className="text-gray-700 mb-4">{scenario.description}</p>

              {/* Framework */}
              <div className="mb-3">
                <span className="text-sm font-semibold text-gray-600">Primary Framework:</span>
                <span className="ml-2 text-sm text-gray-800">{scenario.framework}</span>
              </div>

              {/* Learning Goal */}
              <div className="bg-blue-50 rounded p-3 mb-4">
                <p className="text-sm font-semibold text-blue-800 mb-1">🎯 Learning Goal:</p>
                <p className="text-sm text-gray-700">{scenario.learningGoal}</p>
              </div>

              {/* Parameters */}
              <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                <div className="bg-gray-100 rounded p-2">
                  <p className="text-xs text-gray-600">Protocol (I)</p>
                  <p className="text-lg font-bold text-gray-800">{scenario.defaultI}</p>
                </div>
                <div className="bg-gray-100 rounded p-2">
                  <p className="text-xs text-gray-600">Tolerance (ε)</p>
                  <p className="text-lg font-bold text-gray-800">{scenario.defaultEpsilon}</p>
                </div>
                <div className="bg-gray-100 rounded p-2">
                  <p className="text-xs text-gray-600">Agents</p>
                  <p className="text-lg font-bold text-gray-800">{scenario.agents.length}</p>
                </div>
              </div>

              {/* Agent Groups */}
              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-600 mb-2">Stakeholder Groups:</p>
                <div className="flex flex-wrap gap-2">
                  {scenario.agents.map((agent, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded"
                    >
                      {agent.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => {
                  onSelectScenario(scenario);
                  onNavigate('simulator');
                }}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Run This Scenario
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredScenarios.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No scenarios found for the selected week.
        </div>
      )}

      {/* Info Box */}
      <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <p className="text-sm text-gray-700">
          <strong>💡 How to use:</strong> Select a scenario to load it into the simulator. 
          You can adjust parameters (I and ε) to see how they affect coordination success and ATCF maintenance.
        </p>
      </div>
    </div>
  );
}