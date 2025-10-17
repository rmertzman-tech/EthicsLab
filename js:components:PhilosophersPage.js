// PhilosophersPage Component
function PhilosophersPage({ philosophers }) {
  const [selectedPhilosopher, setSelectedPhilosopher] = React.useState(null);
  const [compareMode, setCompareMode] = React.useState(false);
  const [comparePhilosopher, setComparePhilosopher] = React.useState(null);
  const [view, setView] = React.useState('grid'); // 'grid' or 'detail'

  const handleSelectPhilosopher = (philosopher) => {
    setSelectedPhilosopher(philosopher);
    setView('detail');
  };

  const handleCompare = (philosopher) => {
    if (!compareMode) {
      setCompareMode(true);
      setComparePhilosopher(philosopher);
    } else if (comparePhilosopher?.id === philosopher.id) {
      setCompareMode(false);
      setComparePhilosopher(null);
    } else {
      // Show comparison view
      setSelectedPhilosopher(comparePhilosopher);
      setComparePhilosopher(philosopher);
      setView('compare');
    }
  };

  if (view === 'detail' && selectedPhilosopher) {
    return <PhilosopherDetail 
      philosopher={selectedPhilosopher} 
      onBack={() => setView('grid')}
      onCompare={handleCompare}
    />;
  }

  if (view === 'compare' && selectedPhilosopher && comparePhilosopher) {
    return <PhilosopherCompare
      philosopher1={selectedPhilosopher}
      philosopher2={comparePhilosopher}
      onBack={() => {
        setView('grid');
        setCompareMode(false);
        setComparePhilosopher(null);
      }}
    />;
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Philosopher Database</h1>
        <p className="text-gray-600">
          Explore how different philosophers' assembly histories shaped their ethical frameworks
        </p>
      </div>

      {compareMode && (
        <div className="mb-6 bg-blue-50 border-l-4 border-blue-500 p-4">
          <p className="text-sm text-blue-800">
            <strong>Compare Mode Active:</strong> Click another philosopher to compare with {comparePhilosopher.name}
          </p>
          <button
            onClick={() => {
              setCompareMode(false);
              setComparePhilosopher(null);
            }}
            className="mt-2 text-sm text-blue-600 hover:text-blue-800"
          >
            Cancel Comparison
          </button>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {philosophers.map(philosopher => (
          <div
            key={philosopher.id}
            className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${
              comparePhilosopher?.id === philosopher.id ? 'ring-4 ring-blue-500' : ''
            }`}
          >
            <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-6 text-center">
              <div className="text-5xl mb-3">{philosopher1.image}</div>
            <h2 className="text-2xl font-bold">{philosopher1.name}</h2>
            <p className="text-sm text-gray-300">{philosopher1.dates}</p>
            <span className="inline-block px-3 py-1 bg-white bg-opacity-25 rounded-full text-sm font-semibold mt-2">
              {philosopher1.tradition}
            </span>
          </div>
          <div className="p-6">
            <div className="mb-4">
              <p className="font-semibold text-gray-700 mb-1">Key Question:</p>
              <p className="text-sm text-gray-600 italic">"{philosopher1.ethicalFramework.keyQuestion}"</p>
            </div>
            <div className="mb-4">
              <p className="font-semibold text-gray-700 mb-2">Top Beliefs:</p>
              <ul className="space-y-1">
                {philosopher1.prfProfile.beliefs.slice(0, 3).map((belief, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    {belief.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Philosopher 2 */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-6 text-center rounded-t-lg">
            <div className="text-5xl mb-3">{philosopher2.image}</div>
            <h2 className="text-2xl font-bold">{philosopher2.name}</h2>
            <p className="text-sm text-gray-300">{philosopher2.dates}</p>
            <span className="inline-block px-3 py-1 bg-white bg-opacity-25 rounded-full text-sm font-semibold mt-2">
              {philosopher2.tradition}
            </span>
          </div>
          <div className="p-6">
            <div className="mb-4">
              <p className="font-semibold text-gray-700 mb-1">Key Question:</p>
              <p className="text-sm text-gray-600 italic">"{philosopher2.ethicalFramework.keyQuestion}"</p>
            </div>
            <div className="mb-4">
              <p className="font-semibold text-gray-700 mb-2">Top Beliefs:</p>
              <ul className="space-y-1">
                {philosopher2.prfProfile.beliefs.slice(0, 3).map((belief, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    {belief.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Insights */}
      <div className="mt-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">🔗 Coordination Insight</h3>
        <p className="text-gray-700 mb-3">
          <strong>{philosopher1.name}</strong> and <strong>{philosopher2.name}</strong> have fundamentally 
          different frameworks that emerged from their distinct assembly histories and contexts.
        </p>
        <p className="text-gray-700 mb-3">
          <strong>Traditional ethics asks:</strong> Which framework is correct?
        </p>
        <p className="text-gray-700 font-semibold">
          <strong>Complexity ethics enables:</strong> Coordination through functional equivalence - 
          they can work toward shared outcomes while maintaining their authentic frameworks.
        </p>
      </div>

      {/* Key Differences */}
      <div className="mt-6 bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Differences</h3>
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold text-blue-600 mb-2">{philosopher1.name}'s Focus</p>
              <p className="text-sm text-gray-700">{philosopher1.ethicalFramework.focus}</p>
            </div>
            <div>
              <p className="font-semibold text-purple-600 mb-2">{philosopher2.name}'s Focus</p>
              <p className="text-sm text-gray-700">{philosopher2.ethicalFramework.focus}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}3">{philosopher.image}</div>
              <h2 className="text-xl font-bold">{philosopher.name}</h2>
              <p className="text-sm text-gray-300">{philosopher.dates}</p>
            </div>

            <div className="p-4">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-sm font-semibold rounded-full">
                  {philosopher.tradition}
                </span>
              </div>

              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-700 mb-1">Key Question:</p>
                <p className="text-sm text-gray-600 italic">"{philosopher.ethicalFramework.keyQuestion}"</p>
              </div>

              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-700 mb-2">Core Beliefs:</p>
                <div className="space-y-1">
                  {philosopher.prfProfile.beliefs.slice(0, 2).map((belief, idx) => (
                    <div key={idx} className="flex items-center text-xs">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${belief.strength}%` }}
                        ></div>
                      </div>
                      <span className="text-gray-600">{belief.text.substring(0, 30)}...</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => handleSelectPhilosopher(philosopher)}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold"
                >
                  View Full Profile
                </button>
                <button
                  onClick={() => handleCompare(philosopher)}
                  className={`w-full py-2 rounded-lg transition-colors text-sm font-semibold ${
                    comparePhilosopher?.id === philosopher.id
                      ? 'bg-blue-100 text-blue-800 border-2 border-blue-500'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {comparePhilosopher?.id === philosopher.id ? 'Selected for Compare' : 'Compare'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <p className="text-sm text-gray-700">
          <strong>💡 Tip:</strong> Click "Compare" on two different philosophers to see how their different 
          assembly histories led to different frameworks, and how complexity ethics enables coordination between them.
        </p>
      </div>
    </div>
  );
}

// Philosopher Detail View
function PhilosopherDetail({ philosopher, onBack, onCompare }) {
  const [activeTab, setActiveTab] = React.useState('profile'); // 'profile', 'timeline', 'framework'

  return (
    <div className="max-w-5xl mx-auto">
      <button
        onClick={onBack}
        className="text-blue-600 hover:text-blue-800 mb-4 flex items-center gap-1"
      >
        ← Back to Database
      </button>

      {/* Header */}
      <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-t-lg p-8">
        <div className="flex items-center gap-6">
          <div className="text-7xl">{philosopher.image}</div>
          <div>
            <h1 className="text-3xl font-bold mb-2">{philosopher.name}</h1>
            <p className="text-xl text-gray-300 mb-2">{philosopher.dates}</p>
            <span className="inline-block px-4 py-2 bg-purple-600 rounded-full text-sm font-semibold">
              {philosopher.tradition}
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b">
        <div className="flex gap-1">
          {[
            { id: 'profile', label: 'PRF Profile', icon: '🧠' },
            { id: 'timeline', label: 'Assembly History', icon: '📜' },
            { id: 'framework', label: 'Ethical Framework', icon: '⚖️' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-semibold transition-colors ${
                activeTab === tab.id
                  ? 'bg-white text-blue-600 border-b-2 border-blue-600'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-b-lg shadow-md p-8">
        {activeTab === 'profile' && (
          <div className="space-y-6">
            {/* Beliefs */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Core Beliefs (B)</h3>
              <div className="space-y-3">
                {philosopher.prfProfile.beliefs.map((belief, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-24 mr-3">
                      <div className="bg-gray-200 rounded-full h-4">
                        <div
                          className="bg-blue-600 h-4 rounded-full flex items-center justify-end pr-2"
                          style={{ width: `${belief.strength}%` }}
                        >
                          <span className="text-white text-xs font-bold">{belief.strength}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700">{belief.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Rules */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Reasoning Rules (R)</h3>
              <ul className="space-y-2">
                {philosopher.prfProfile.rules.map((rule, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-600 mr-2">→</span>
                    <span className="text-gray-700">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ontology */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Ontology (O)</h3>
              <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">{philosopher.prfProfile.ontology}</p>
            </div>

            {/* Authenticity */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Authenticity Criteria (A+)</h3>
              <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">{philosopher.prfProfile.authenticity}</p>
            </div>
          </div>
        )}

        {activeTab === 'timeline' && (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Assembly History Timeline</h3>
            {philosopher.assemblyHistory.map((period, idx) => (
              <div key={idx} className="border-l-4 border-blue-500 pl-6 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold text-gray-800">{period.period}</h4>
                  <span className="text-sm text-gray-500">Age {period.age}</span>
                </div>
                <div className="mb-3">
                  <p className="text-sm font-semibold text-gray-600 mb-1">Key Events:</p>
                  <ul className="space-y-1">
                    {period.events.map((event, eidx) => (
                      <li key={eidx} className="text-sm text-gray-700 flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        {event}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-purple-800 mb-1">PRF Impact:</p>
                  <p className="text-sm text-gray-700">{period.prfImpact}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'framework' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{philosopher.tradition}</h3>
              <p className="text-xl text-gray-600 italic mb-4">"{philosopher.ethicalFramework.keyQuestion}"</p>
              <p className="text-gray-700">{philosopher.ethicalFramework.focus}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-green-700 mb-3">✓ Strengths</h4>
                <ul className="space-y-2">
                  {philosopher.ethicalFramework.strengths.map((strength, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-500 mr-2">+</span>
                      <span className="text-sm text-gray-700">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-red-700 mb-3">⚠ Limitations</h4>
                <ul className="space-y-2">
                  {philosopher.ethicalFramework.limitations.map((limitation, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-red-500 mr-2">-</span>
                      <span className="text-sm text-gray-700">{limitation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">🌍 Modern Relevance</h4>
              <div className="flex flex-wrap gap-2">
                {philosopher.modernRelevance.map((area, idx) => (
                  <span key={idx} className="px-3 py-1 bg-blue-200 text-blue-800 text-sm rounded-full">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Compare Button */}
      <div className="mt-6">
        <button
          onClick={() => onCompare(philosopher)}
          className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
        >
          Compare with Another Philosopher
        </button>
      </div>
    </div>
  );
}

// Philosopher Comparison View
function PhilosopherCompare({ philosopher1, philosopher2, onBack }) {
  return (
    <div className="max-w-7xl mx-auto">
      <button
        onClick={onBack}
        className="text-blue-600 hover:text-blue-800 mb-4 flex items-center gap-1"
      >
        ← Back to Database
      </button>

      <h1 className="text-3xl font-bold text-gray-800 mb-6">Framework Comparison</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Philosopher 1 */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 text-center rounded-t-lg">
            <div className="text-5xl mb-