// AssignmentsPage Component
function AssignmentsPage({ assignments, onNavigate }) {
  const [selectedWeek, setSelectedWeek] = React.useState(1);
  const [expandedTask, setExpandedTask] = React.useState(null);

  const currentAssignment = assignments.find(a => a.week === selectedWeek);

  const toggleTask = (taskId) => {
    setExpandedTask(expandedTask === taskId ? null : taskId);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Course Assignments</h1>
        <p className="text-gray-600">
          Complete these assignments to master complexity ethics and coordination across difference
        </p>
      </div>

      {/* Week Navigation */}
      <div className="mb-6 flex gap-2 flex-wrap">
        {assignments.map(assignment => (
          <button
            key={assignment.week}
            onClick={() => setSelectedWeek(assignment.week)}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              selectedWeek === assignment.week
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Week {assignment.week}
          </button>
        ))}
      </div>

      {currentAssignment && (
        <div>
          {/* Assignment Header */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {currentAssignment.title}
                </h2>
                <p className="text-gray-600">{currentAssignment.description}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Total Points</p>
                <p className="text-3xl font-bold text-blue-600">{currentAssignment.points}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <span className="text-gray-600">📅</span>
                <span className="text-sm text-gray-700">Due: {currentAssignment.dueDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">📝</span>
                <span className="text-sm text-gray-700">{currentAssignment.tasks.length} Tasks</span>
              </div>
            </div>
          </div>

          {/* Learning Goals */}
          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">🎯 Learning Goals</h3>
            <ul className="space-y-2">
              {currentAssignment.learningGoals.map((goal, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">{goal}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tasks */}
          <div className="space-y-4">
            {currentAssignment.tasks.map((task, idx) => (
              <div key={task.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleTask(task.id)}
                  className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold text-sm">
                          {idx + 1}
                        </span>
                        <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
                      </div>
                      <p className="text-gray-600 ml-11">{task.description}</p>
                    </div>
                    <div className="ml-4 text-right">
                      <p className="text-sm text-gray-600">Points</p>
                      <p className="text-xl font-bold text-blue-600">{task.points}</p>
                    </div>
                  </div>
                </button>

                {expandedTask === task.id && (
                  <div className="px-6 pb-6 border-t border-gray-200 bg-gray-50">
                    <div className="pt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">📋 Deliverable:</h4>
                      <p className="text-gray-700 mb-4">{task.deliverable}</p>

                      {/* Submission Area */}
                      <div className="bg-white rounded-lg p-4 border-2 border-dashed border-gray-300">
                        <p className="text-sm text-gray-600 mb-3">
                          <strong>Submit your work:</strong> Upload your completed assignment or paste a link
                        </p>
                        <div className="space-y-2">
                          <input
                            type="file"
                            className="w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                          />
                          <input
                            type="text"
                            placeholder="Or paste a link to your Google Doc, etc."
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                            Submit Assignment
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <button
              onClick={() => onNavigate('scenarios')}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow text-left"
            >
              <div className="text-2xl mb-2">🎭</div>
              <h3 className="font-semibold text-gray-800 mb-1">Run Scenarios</h3>
              <p className="text-sm text-gray-600">Use the Coalition Lab simulator</p>
            </button>

            <button
              onClick={() => onNavigate('philosophers')}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow text-left"
            >
              <div className="text-2xl mb-2">🧠</div>
              <h3 className="font-semibold text-gray-800 mb-1">Explore Philosophers</h3>
              <p className="text-sm text-gray-600">Study PRF profiles and assembly histories</p>
            </button>

            <button
              onClick={() => onNavigate('progress')}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow text-left"
            >
              <div className="text-2xl mb-2">📊</div>
              <h3 className="font-semibold text-gray-800 mb-1">Track Progress</h3>
              <p className="text-sm text-gray-600">View your achievements and grades</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}