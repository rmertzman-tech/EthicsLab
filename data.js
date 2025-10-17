// Historical Scenarios Database
// Complete data for all 6 scenarios across 4 weeks

const historicalScenarios = [
    {
        id: 'ancient-athens',
        name: 'Ancient Athens: The Trial of Socrates',
        period: '430 BCE',
        week: 1,
        tradition: 'Virtue Ethics',
        description: 'Experience why virtue ethics worked in small-scale homogeneous societies',
        difficulty: 'Beginner',
        duration: '45 min',
        learningGoals: [
            'Understand when virtue ethics succeeds',
            'Experience shared cultural framework requirements',
            'Discover limitations of cultural homogeneity'
        ],
        scenario: {
            name: "Ancient_Athens_Socrates_Trial",
            task: "Decide whether to honor Socrates or execute him for corrupting youth",
            groups: [
                {
                    name: "Traditional_Citizens",
                    color: "#8B4513",
                    size: 5,
                    capabilities: ["warfare", "farming", "civic_participation"],
                    beliefs: [
                        {name: "honor_gods", strength: 0.9},
                        {name: "respect_tradition", strength: 0.85},
                        {name: "athenian_excellence", strength: 0.8}
                    ],
                    initial_ATCF: 0.78
                },
                {
                    name: "Philosopher_Students",
                    color: "#4169E1",
                    size: 5,
                    capabilities: ["dialectic", "teaching", "questioning"],
                    beliefs: [
                        {name: "examined_life", strength: 0.95},
                        {name: "knowledge_is_virtue", strength: 0.9}
                    ],
                    initial_ATCF: 0.82
                },
                {
                    name: "Democratic_Leaders",
                    color: "#228B22",
                    size: 5,
                    capabilities: ["oratory", "political_organization"],
                    beliefs: [
                        {name: "democratic_governance", strength: 0.88},
                        {name: "athenian_greatness", strength: 0.9}
                    ],
                    initial_ATCF: 0.75
                }
            ],
            defaultParams: {
                I: 3,
                epsilon: 0.12,
                atcfWeights: { HC: 0.40, PI: 0.30, PC: 0.20, MCC: 0.10 },
                stressors: { external_threat: 0.15, internal_faction: 0.25 },
                T: 24,
                N: 100
            }
        }
    },
    {
        id: 'enlightenment-europe',
        name: 'Enlightenment Europe: Peace Treaty',
        period: '1795',
        week: 2,
        tradition: 'Deontology',
        description: 'How universal principles enabled coordination after religious wars',
        difficulty: 'Intermediate',
        duration: '60 min',
        learningGoals: [
            'Experience deontological breakthrough',
            'Understand role of abstraction in coordination',
            'Discover power of universal principles'
        ],
        scenario: {
            name: "Enlightenment_Peace_Treaty",
            task: "Establish peace treaty principles after religious wars",
            groups: [
                {
                    name: "Catholic_Diplomats",
                    color: "#FFD700",
                    size: 5,
                    capabilities: ["diplomacy", "natural_law_reasoning"],
                    beliefs: [
                        {name: "catholic_truth", strength: 0.9},
                        {name: "natural_law", strength: 0.85}
                    ],
                    initial_ATCF: 0.72
                },
                {
                    name: "Protestant_Diplomats",
                    color: "#4B0082",
                    size: 5,
                    capabilities: ["scripture_interpretation", "individual_conscience"],
                    beliefs: [
                        {name: "scripture_alone", strength: 0.92},
                        {name: "protestant_truth", strength: 0.85}
                    ],
                    initial_ATCF: 0.75
                },
                {
                    name: "Rationalist_Philosophers",
                    color: "#20B2AA",
                    size: 5,
                    capabilities: ["logical_reasoning", "secular_ethics"],
                    beliefs: [
                        {name: "reason_supreme", strength: 0.95},
                        {name: "universal_principles", strength: 0.9}
                    ],
                    initial_ATCF: 0.8
                }
            ],
            defaultParams: {
                I: 2,
                epsilon: 0.30,
                atcfWeights: { HC: 0.25, PI: 0.30, PC: 0.30, MCC: 0.15 },
                stressors: { religious_conflict: 0.35, territorial: 0.20 },
                T: 52,
                N: 100
            }
        }
    },
    {
        id: 'industrial-revolution',
        name: 'Industrial Revolution: Factory Reform',
        period: '1833',
        week: 2,
        tradition: 'Consequentialism',
        description: 'When measurable suffering demanded utilitarian response',
        difficulty: 'Intermediate',
        duration: '60 min',
        learningGoals: [
            'Experience consequentialist reform power',
            'Understand role of measurement in ethics',
            'Discover outcome-focus breaking ideological deadlock'
        ],
        scenario: {
            name: "Factory_Act_1833",
            task: "Pass Factory Act limiting child labor",
            groups: [
                {
                    name: "Factory_Owners",
                    color: "#8B0000",
                    size: 5,
                    capabilities: ["capital", "production"],
                    beliefs: [
                        {name: "free_market", strength: 0.9},
                        {name: "competition_necessary", strength: 0.85}
                    ],
                    initial_ATCF: 0.7
                },
                {
                    name: "Factory_Workers",
                    color: "#696969",
                    size: 5,
                    capabilities: ["labor", "organizing"],
                    beliefs: [
                        {name: "fair_treatment", strength: 0.95},
                        {name: "child_protection", strength: 0.92}
                    ],
                    initial_ATCF: 0.65
                },
                {
                    name: "Utilitarian_Reformers",
                    color: "#32CD32",
                    size: 5,
                    capabilities: ["data_collection", "legislative_drafting"],
                    beliefs: [
                        {name: "maximize_welfare", strength: 0.95},
                        {name: "evidence_based", strength: 0.88}
                    ],
                    initial_ATCF: 0.78
                }
            ],
            defaultParams: {
                I: 1,
                epsilon: 0.35,
                atcfWeights: { HC: 0.20, PI: 0.25, PC: 0.35, MCC: 0.20 },
                stressors: { child_mortality: 0.45, economic_pressure: 0.30 },
                T: 26,
                N: 100
            }
        }
    },
    {
        id: 'green-belt-movement',
        name: 'Green Belt Movement: Coordination Across Difference',
        period: '1977-2006',
        week: 3,
        tradition: 'Complexity Ethics',
        description: 'Experience how complexity ethics enables unprecedented coordination',
        difficulty: 'Advanced',
        duration: '90 min',
        learningGoals: [
            'Experience functional equivalence at scale',
            'Understand capability-based coordination',
            'Discover optimal I/H/ATCF balance'
        ],
        scenario: {
            name: "Green_Belt_Movement",
            task: "Plant 50 million trees with women controlling nurseries",
            groups: [
                {
                    name: "Rural_Women",
                    color: "#8B4513",
                    size: 5,
                    capabilities: ["local_knowledge", "organizing"],
                    beliefs: [
                        {name: "family_survival", strength: 0.95},
                        {name: "community_care", strength: 0.9}
                    ],
                    initial_ATCF: 0.68
                },
                {
                    name: "Scientists",
                    color: "#228B22",
                    size: 5,
                    capabilities: ["ecological_knowledge", "research"],
                    beliefs: [
                        {name: "ecosystem_restoration", strength: 0.92},
                        {name: "indigenous_species", strength: 0.88}
                    ],
                    initial_ATCF: 0.75
                },
                {
                    name: "Feminist_Activists",
                    color: "#9370DB",
                    size: 5,
                    capabilities: ["political_organizing", "advocacy"],
                    beliefs: [
                        {name: "women_empowerment", strength: 0.95},
                        {name: "gender_justice", strength: 0.92}
                    ],
                    initial_ATCF: 0.73
                },
                {
                    name: "Christian_Stewards",
                    color: "#FFD700",
                    size: 5,
                    capabilities: ["moral_authority", "community_organizing"],
                    beliefs: [
                        {name: "creation_care", strength: 0.9},
                        {name: "service_to_poor", strength: 0.92}
                    ],
                    initial_ATCF: 0.77
                }
            ],
            defaultParams: {
                I: 1,
                epsilon: 0.40,
                atcfWeights: { HC: 0.25, PI: 0.25, PC: 0.25, MCC: 0.25 },
                stressors: { drought: 0.20, political: 0.30, funding: 0.25 },
                T: 156,
                N: 200
            }
        }
    },
    {
        id: 'climate-change',
        name: 'Climate Change: Planetary Crisis',
        period: '2015-Present',
        week: 4,
        tradition: 'Applied Complexity Ethics',
        description: 'Design coordination for planetary-scale challenge',
        difficulty: 'Advanced',
        duration: '90 min',
        learningGoals: [
            'Apply complexity ethics to current crisis',
            'Design optimal I/H/ATCF balance',
            'Compare traditional vs. complexity approaches'
        ],
        scenario: {
            name: "Climate_Coordination",
            task: "Limit global warming to 1.5°C",
            groups: [
                {
                    name: "US_Conservatives",
                    color: "#DC143C",
                    size: 5,
                    capabilities: ["economic_power", "technology"],
                    beliefs: [
                        {name: "market_solutions", strength: 0.88},
                        {name: "innovation", strength: 0.85}
                    ],
                    initial_ATCF: 0.72
                },
                {
                    name: "EU_Progressives",
                    color: "#0000CD",
                    size: 5,
                    capabilities: ["policy_expertise", "regulation"],
                    beliefs: [
                        {name: "precautionary_principle", strength: 0.9},
                        {name: "global_cooperation", strength: 0.92}
                    ],
                    initial_ATCF: 0.75
                },
                {
                    name: "Indigenous_Peoples",
                    color: "#8B4513",
                    size: 5,
                    capabilities: ["traditional_knowledge", "land_stewardship"],
                    beliefs: [
                        {name: "land_relationship", strength: 0.95},
                        {name: "seven_generations", strength: 0.93}
                    ],
                    initial_ATCF: 0.7
                },
                {
                    name: "Global_South",
                    color: "#FFD700",
                    size: 5,
                    capabilities: ["demographic_power", "moral_claims"],
                    beliefs: [
                        {name: "development_right", strength: 0.95},
                        {name: "climate_justice", strength: 0.92}
                    ],
                    initial_ATCF: 0.68
                }
            ],
            defaultParams: {
                I: 1,
                epsilon: 0.45,
                atcfWeights: { HC: 0.25, PI: 0.25, PC: 0.25, MCC: 0.25 },
                stressors: { economic: 0.35, political: 0.40, extreme_weather: 0.30 },
                T: 78,
                N: 200
            }
        }
    },
    {
        id: 'ai-safety',
        name: 'AI Safety: Future Coordination',
        period: '2025-2035',
        week: 4,
        tradition: 'Applied Complexity Ethics',
        description: 'Design coordination for emerging AI challenges',
        difficulty: 'Expert',
        duration: '90 min',
        learningGoals: [
            'Apply complexity ethics to future challenges',
            'Handle uncertainty in coordination design',
            'Balance safety with innovation'
        ],
        scenario: {
            name: "AI_Safety_Coordination",
            task: "Develop transformative AI safely with equitable benefits",
            groups: [
                {
                    name: "Tech_Companies",
                    color: "#FF4500",
                    size: 5,
                    capabilities: ["AI_development", "capital"],
                    beliefs: [
                        {name: "innovation_primary", strength: 0.92},
                        {name: "market_competition", strength: 0.88}
                    ],
                    initial_ATCF: 0.75
                },
                {
                    name: "Safety_Researchers",
                    color: "#4169E1",
                    size: 5,
                    capabilities: ["technical_expertise", "risk_modeling"],
                    beliefs: [
                        {name: "existential_risk", strength: 0.95},
                        {name: "precautionary_principle", strength: 0.9}
                    ],
                    initial_ATCF: 0.77
                },
                {
                    name: "Ethics_Scholars",
                    color: "#9370DB",
                    size: 5,
                    capabilities: ["moral_reasoning", "deliberation"],
                    beliefs: [
                        {name: "human_dignity", strength: 0.93},
                        {name: "democratic_control", strength: 0.88}
                    ],
                    initial_ATCF: 0.72
                },
                {
                    name: "Global_South_Representatives",
                    color: "#FFD700",
                    size: 5,
                    capabilities: ["political_representation", "advocacy"],
                    beliefs: [
                        {name: "tech_colonialism_concern", strength: 0.9},
                        {name: "benefit_sharing", strength: 0.88}
                    ],
                    initial_ATCF: 0.68
                }
            ],
            defaultParams: {
                I: 2,
                epsilon: 0.35,
                atcfWeights: { HC: 0.25, PI: 0.25, PC: 0.25, MCC: 0.25 },
                stressors: { competitive: 0.40, regulatory: 0.35, geopolitical: 0.30 },
                T: 52,
                N: 200
            }
        }
    }
];