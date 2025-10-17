// Main App Component
function App() {
  const [currentPage, setCurrentPage] = React.useState('home');
  const [selectedScenario, setSelectedScenario] = React.useState(null);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleSelectScenario = (scenario) => {
    setSelectedScenario(scenario);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => handleNavigate('home')}
              className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
            >
              Ethics Lab
            </button>

            <div className="flex gap-1">
              {[
                { id: 'home', label: 'Home', icon: '🏠' },
                { id: 'scenarios', label: 'Scenarios', icon: '🎭' },
                { id: 'simulator', label: 'Simulator', icon: '⚙️' },
                { id: 'philosophers', label: 'Philosophers', icon: '🧠' },
                { id: 'assignments', label: 'Assignments', icon: '📝' },
                { id: 'progress', label: 'Progress', icon: '📊' }
              ].map(navItem => (
                <button
                  key={navItem.id}
                  onClick={() => handleNavigate(navItem.id)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    currentPage === navItem.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="hidden md:inline">{navItem.icon} {navItem.label}</span>
                  <span className="md:hidden">{navItem.icon}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {currentPage === 'home' && (
          <HomePage onNavigate={handleNavigate} />
        )}

        {currentPage === 'scenarios' && (
          <ScenariosPage
            scenarios={historicalScenarios}
            onSelectScenario={handleSelectScenario}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'simulator' && (
          <SimulatorPage
            scenario={selectedScenario}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'philosophers' && (
          <PhilosophersPage philosophers={philosophersDB} />
        )}

        {currentPage === 'assignments' && (
          <AssignmentsPage
            assignments={assignments}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'progress' && (
          <ProgressPage progressConfig={progressConfig} />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Ethics Assembly History Lab</h3>
              <p className="text-gray-400 text-sm">
                An interactive module exploring how ethical frameworks emerged from specific 
                historical contexts and how we coordinate across them today.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleNavigate('scenarios')}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Historical Scenarios
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigate('philosophers')}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Philosopher Database
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigate('assignments')}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Course Assignments
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">About</h3>
              <p className="text-gray-400 text-sm mb-2">
                Part of the Capability-Based Coordination framework
              </p>
              <p className="text-gray-400 text-sm">
                Based on FAIM-QIRF theoretical foundations
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
            <p>© 2025 Ethics Lab. Built for educational purposes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Initialize the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);