# Ethics Assembly History Lab

An interactive 4-week module exploring how different ethical frameworks emerged from specific historical contexts, and how we can coordinate across them using complexity ethics.

## 🌟 Features

- **6 Historical Scenarios**: From Ancient Athens to AI Safety, explore when ethical frameworks work and fail
- **Interactive Simulator**: Run ensemble simulations with adjustable I, ε, and ATCF parameters
- **Philosopher Database**: Explore PRF profiles of Aristotle, Kant, Mill, Gilligan, and Singer
- **Complete Assignment System**: 4 weeks of structured learning activities
- **Progress Tracking**: Monitor achievements and learning milestones

## 📁 Project Structure

```
ethics-lab/
├── index.html                      # Main HTML file
├── css/
│   └── styles.css                  # Custom styles
├── js/
│   ├── app.js                      # Main React application
│   ├── data/
│   │   ├── scenarios.js            # Historical scenario configurations
│   │   ├── philosophers.js         # Philosopher PRF profiles
│   │   └── assignments.js          # Weekly assignments
│   ├── components/
│   │   ├── HomePage.js             # Landing page
│   │   ├── ScenariosPage.js        # Scenario library
│   │   ├── SimulatorPage.js        # Interactive simulator
│   │   ├── PhilosophersPage.js     # Philosopher database
│   │   ├── AssignmentsPage.js      # Assignment viewer
│   │   └── ProgressPage.js         # Progress tracker
│   └── utils/
│       └── simulation.js           # Simulation engine
└── README.md                       # This file
```

## 🚀 Quick Start

### Option 1: GitHub Pages (Recommended)

1. **Create a new repository** on GitHub:
   ```bash
   git init ethics-lab
   cd ethics-lab
   ```

2. **Add all files** to the repository (copy all files from this project)

3. **Commit and push**:
   ```bash
   git add .
   git commit -m "Initial Ethics Lab deployment"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/ethics-lab.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select **main** branch
   - Click **Save**
   - Your site will be live at: `https://YOUR-USERNAME.github.io/ethics-lab/`

### Option 2: Local Development

1. **Clone or download** this project
2. **Open `index.html`** in a web browser
3. That's it! No build process required.

## 📚 Module Structure

### Week 1: Discovery
- **Learning Goal**: Why do smart people disagree about ethics?
- **Activities**: PRF self-assessment, philosopher exploration, Ancient Athens scenario
- **Key Insight**: Different assembly histories → different frameworks

### Week 2: Historical Analysis
- **Learning Goal**: When do frameworks work and when do they fail?
- **Activities**: Enlightenment Europe & Industrial Revolution scenarios, framework comparison
- **Key Insight**: Each framework was a breakthrough for its context

### Week 3: Complexity Ethics
- **Learning Goal**: How to coordinate across radical difference
- **Activities**: Green Belt Movement deep dive, coalition design challenge
- **Key Insight**: Functional equivalence enables unprecedented coordination

### Week 4: Future Application
- **Learning Goal**: Apply to planetary-scale challenges
- **Activities**: Climate/AI scenarios, final coordination architecture project
- **Key Insight**: Complexity ethics necessary for existential challenges

## 🎯 Learning Objectives

By the end of this module, students will be able to:

1. ✅ Understand their own ethical PRF (Personal Reasoning Framework)
2. ✅ Trace how philosophers' experiences shaped their frameworks
3. ✅ Master I/H/ATCF tradeoffs in coalition design
4. ✅ Coordinate across ethical differences without compromising authenticity
5. ✅ Apply complexity ethics to real-world challenges

## 🛠️ Technical Details

### Built With

- **React 18.2** - UI framework
- **Recharts 2.5** - Data visualization
- **Tailwind CSS 2.2** - Styling
- **Vanilla JavaScript** - Simulation engine

### Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers supported

### Performance

- Single-page application
- ~400KB total size
- Loads instantly from CDN
- Works offline after first load

## 📊 Simulation Engine

The simplified Agent-Based Model demonstrates core complexity ethics concepts:

- **Protocol Complexity (I)**: Higher values create more friction but ensure quality
- **Tolerance (ε)**: Higher values enable diverse coordination
- **ATCF**: Measures authentic identity preservation over time
- **Ensemble Runs**: Test robustness across multiple simulations

### Key Parameters

```javascript
I (Protocol Complexity): 0.0 - 1.0
  - Low (< 0.2): Minimal rules, maximum flexibility
  - Medium (0.2 - 0.4): Balanced approach
  - High (> 0.4): Complex protocols, high quality

ε (Tolerance): 0.0 - 1.0
  - Low (< 0.2): Requires conformity
  - Medium (0.2 - 0.4): Moderate diversity
  - High (> 0.4): Welcomes radical difference

ATCF (Authenticity): 0.0 - 1.0
  - < 0.5: Identity compromised
  - 0.5 - 0.7: Moderate preservation
  - > 0.7: Strong identity maintenance
```

## 🎓 For Instructors

### Grading Rubrics

Detailed rubrics are included in `js/data/assignments.js` for:
- PRF self-assessments
- Simulation reports
- Coalition design challenges
- Final projects

### Customization

To add more content:

1. **Add scenarios**: Edit `js/data/scenarios.js`
2. **Add philosophers**: Edit `js/data/philosophers.js`
3. **Modify assignments**: Edit `js/data/assignments.js`
4. **Adjust styling**: Edit `css/styles.css`

### LMS Integration

This can be:
- Embedded in Canvas/Blackboard via iframe
- Linked as external tool
- Exported to SCORM package (with additional tools)

## 🤝 Contributing

This is an educational tool. Contributions welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📖 Related Resources

- **FAIM-QIRF Framework**: Theoretical foundations
- **Capability-Based Coordination**: Core concepts
- **Bootstrap Resolution**: Normative authority approach

## 📝 License

This project is designed for educational use. Feel free to adapt for your courses.

## 🐛 Known Limitations

- Simulation engine is simplified for pedagogy (not full ABM)
- No backend storage (progress resets on page reload)
- File uploads are client-side only (no server storage)

### Future Enhancements

- [ ] Add backend database for progress persistence
- [ ] Implement full agent-based model
- [ ] Add export functionality for results
- [ ] Create instructor dashboard
- [ ] Add more historical scenarios
- [ ] Include video tutorials

## 💬 Support

For questions or issues:
- Check the README
- Review the code comments
- Open an issue on GitHub

## 🎉 Acknowledgments

Based on the Capability-Based Coordination framework and FAIM-QIRF theoretical foundations.

---

**Happy Coordinating! 🌍**