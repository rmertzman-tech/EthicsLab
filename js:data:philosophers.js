// Philosopher Database
const philosophersDB = [
  {
    id: 'aristotle',
    name: 'Aristotle',
    dates: '384-322 BCE',
    tradition: 'Virtue Ethics',
    image: '🏛️',
    
    prfProfile: {
      beliefs: [
        { text: 'Human nature has inherent purpose (telos)', strength: 95 },
        { text: 'Excellence achieved through habituation', strength: 90 },
        { text: 'Practical wisdom guides ethical action', strength: 95 },
        { text: 'Character development requires community', strength: 85 }
      ],
      rules: [
        'Observe excellent exemplars systematically',
        'Practice virtues until they become habitual',
        'Seek the mean between extremes',
        'Develop phronesis (practical wisdom) through experience'
      ],
      ontology: 'Teleological view of nature; everything has proper function and purpose. Reality understood through four causes. Hierarchical natural order.',
      authenticity: 'Excellence emerges from fulfilling one\'s proper function within community. Authentic living means actualizing human potential through virtuous character.'
    },
    
    ethicalFramework: {
      keyQuestion: 'What kind of person should I become?',
      focus: 'Character development and human flourishing',
      strengths: [
        'Emphasizes long-term character over isolated acts',
        'Integrates emotion and reason',
        'Recognizes role of community and exemplars',
        'Provides rich conception of good life'
      ],
      limitations: [
        'Requires shared conception of human nature',
        'May reinforce existing hierarchies',
        'Difficult to apply across cultural differences',
        'Less clear guidance for novel situations'
      ]
    },
    
    assemblyHistory: [
      {
        period: 'Early Life (384-367 BCE)',
        age: '0-17',
        events: [
          'Born in Stagira, father was physician to Macedonian king',
          'Medical heritage influenced teleological thinking',
          'Early exposure to systematic observation'
        ],
        prfImpact: 'Medical background shaped emphasis on function, diagnosis, and holistic health'
      },
      {
        period: 'Academy Years (367-347 BCE)',
        age: '17-37',
        events: [
          'Studied under Plato in Athens',
          'Engaged with abstract Forms theory',
          'Developed critique of Platonic idealism'
        ],
        prfImpact: 'Moved toward empirical observation and concrete examples over abstract principles'
      },
      {
        period: 'Mature Work (347-322 BCE)',
        age: '37-62',
        events: [
          'Founded Lyceum in Athens',
          'Tutored Alexander the Great',
          'Systematic study of biology, politics, ethics',
          'Lived in stable polis with clear social roles'
        ],
        prfImpact: 'Hierarchical society with defined roles made virtue ethics natural framework. Biological studies reinforced teleological worldview.'
      }
    ],
    
    influences: {
      influencedBy: ['Plato', 'Hippocrates', 'Pre-Socratics'],
      influenced: ['Thomas Aquinas', 'Alasdair MacIntyre', 'Modern virtue ethicists']
    },
    
    modernRelevance: [
      'Professional ethics (medicine, law, business)',
      'Character education in schools',
      'Leadership development programs',
      'Community-based moral formation'
    ]
  },
  
  {
    id: 'kant',
    name: 'Immanuel Kant',
    dates: '1724-1804',
    tradition: 'Deontology',
    image: '⚖️',
    
    prfProfile: {
      beliefs: [
        { text: 'Rationality defines human dignity', strength: 100 },
        { text: 'Moral law discoverable by reason alone', strength: 95 },
        { text: 'Autonomy is fundamental to ethics', strength: 95 },
        { text: 'Duty supersedes inclination', strength: 90 }
      ],
      rules: [
        'Act only on maxims you can will as universal law',
        'Treat persons as ends in themselves, never merely as means',
        'Act as if legislating for a kingdom of ends',
        'Test moral principles for logical consistency'
      ],
      ontology: 'Noumenal/phenomenal distinction. Freedom exists in noumenal realm. Humans belong to both natural world (causally determined) and moral world (free).',
      authenticity: 'Acting from duty to rational moral law, not from inclination or emotion. Authentic moral agency requires autonomous rational will.'
    },
    
    ethicalFramework: {
      keyQuestion: 'What principle should guide this action?',
      focus: 'Universal moral principles and human dignity',
      strengths: [
        'Provides clear, universal guidance',
        'Respects human autonomy and dignity',
        'Not dependent on consequences or culture',
        'Explains strong moral intuitions about rights'
      ],
      limitations: [
        'May produce counterintuitive results in edge cases',
        'Struggles with conflicting duties',
        'Abstract and difficult to apply',
        'Assumes cross-cultural rational agreement possible'
      ]
    },
    
    assemblyHistory: [
      {
        period: 'Early Life (1724-1746)',
        age: '0-22',
        events: [
          'Born in Königsberg, Prussia',
          'Raised in Pietist household (emphasis on duty, individual conscience)',
          'Early education in classical languages and Lutheran theology'
        ],
        prfImpact: 'Protestant emphasis on individual moral responsibility and inner conviction shaped focus on autonomous reason'
      },
      {
        period: 'Intellectual Development (1746-1781)',
        age: '22-57',
        events: [
          'Studied Leibniz, Wolff (rationalism) and Newton (universal laws)',
          '"Awakened from dogmatic slumber" by Hume',
          'Scientific Revolution demonstrated power of universal principles',
          'Enlightenment context valuing reason over tradition'
        ],
        prfImpact: 'Sought to establish ethics on firm rational foundation like Newtonian physics. Enlightenment optimism about universal reason.'
      },
      {
        period: 'Critical Philosophy (1781-1804)',
        age: '57-80',
        events: [
          'Published Critique of Pure Reason, Groundwork, Critique of Practical Reason',
          'Systematic philosopher developing comprehensive framework',
          'Never traveled more than 40 miles from Königsberg',
          'Regular, disciplined life (townspeople set clocks by his walks)'
        ],
        prfImpact: 'Personal temperament favoring systematic, principled thinking. Stable environment allowed abstract theorizing. Protestant work ethic evident in rigorous systematicity.'
      }
    ],
    
    influences: {
      influencedBy: ['Leibniz', 'Hume', 'Rousseau', 'Newton'],
      influenced: ['Rawls', 'Korsgaard', 'Modern human rights theory', 'Contemporary deontologists']
    },
    
    modernRelevance: [
      'Human rights frameworks and international law',
      'Medical ethics (informed consent, autonomy)',
      'Business ethics (stakeholder theory)',
      'AI ethics (dignity, autonomy, universal principles)'
    ]
  },
  
  {
    id: 'mill',
    name: 'John Stuart Mill',
    dates: '1806-1873',
    tradition: 'Consequentialism',
    image: '⚖️',
    
    prfProfile: {
      beliefs: [
        { text: 'Pleasure and pain are objective measures', strength: 85 },
        { text: 'Higher pleasures exist (intellectual, moral)', strength: 90 },
        { text: 'Equal consideration of all interests', strength: 95 },
        { text: 'Social reform through evidence and reason', strength: 90 }
      ],
      rules: [
        'Calculate expected outcomes for all affected',
        'Maximize overall happiness (utility)',
        'Consider quality as well as quantity of pleasure',
        'Weight long-term over short-term consequences'
      ],
      ontology: 'Naturalistic worldview. No supernatural entities needed for ethics. Empiricist epistemology - knowledge from experience.',
      authenticity: 'Moral progress through evidence-based reform. Authentic moral agency means using reason to reduce suffering and increase happiness.'
    },
    
    ethicalFramework: {
      keyQuestion: 'What outcome will maximize well-being?',
      focus: 'Consequences and overall welfare',
      strengths: [
        'Clear decision procedure for moral choices',
        'Impartial consideration of all affected',
        'Adapts to new information and contexts',
        'Practical and action-guiding'
      ],
      limitations: [
        'Difficult to predict all consequences',
        'May justify intuitively wrong actions',
        'Measurement challenges for happiness',
        'Can neglect individual rights and justice'
      ]
    },
    
    assemblyHistory: [
      {
        period: 'Intensive Education (1806-1826)',
        age: '0-20',
        events: [
          'Extraordinary education by father James Mill (utilitarian philosopher)',
          'Greek at 3, Latin at 8, logic at 12, political economy at 13',
          'Mental breakdown at 20 from over-work and emotional suppression',
          'Discovery of poetry and emotion through Wordsworth'
        ],
        prfImpact: 'Early emphasis on reason and calculation. Crisis revealed importance of emotion and "higher pleasures." Reformed utilitarianism to include quality of experience.'
      },
      {
        period: 'Social Reform Work (1826-1858)',
        age: '20-52',
        events: [
          'Worked for East India Company (exposed to colonialism issues)',
          'Wrote extensively on political economy, logic, social reform',
          'Advocated for workers\' rights, women\'s suffrage, education reform',
          'Relationship with Harriet Taylor (intellectual partnership)'
        ],
        prfImpact: 'Direct exposure to systematic suffering (poverty, oppression of women, colonial injustice) made maximizing welfare urgent practical concern. Partnership with Taylor influenced emphasis on equality.'
      },
      {
        period: 'Mature Philosophy (1858-1873)',
        age: '52-67',
        events: [
          'Published On Liberty, Utilitarianism, The Subjection of Women',
          'Member of Parliament (1865-68) advocating reforms',
          'Combined empiricist philosophy with progressive politics',
          'Championed individual liberty within utilitarian framework'
        ],
        prfImpact: 'Synthesized concern for consequences with protection of individual liberty. Practical political experience informed philosophical refinement.'
      }
    ],
    
    influences: {
      influencedBy: ['Jeremy Bentham', 'James Mill', 'Harriet Taylor', 'Wordsworth'],
      influenced: ['Peter Singer', 'Effective Altruism movement', 'Modern welfare economics', 'Public policy analysis']
    },
    
    modernRelevance: [
      'Cost-benefit analysis in policy',
      'Effective Altruism and global poverty reduction',
      'Environmental ethics (sentience-based)',
      'Public health ethics (population-level outcomes)'
    ]
  },
  
  {
    id: 'gilligan',
    name: 'Carol Gilligan',
    dates: '1936-present',
    tradition: 'Care Ethics',
    image: '🤝',
    
    prfProfile: {
      beliefs: [
        { text: 'Relationships constitute personhood', strength: 95 },
        { text: 'Care is moral foundation, not derived principle', strength: 90 },
        { text: 'Context matters for ethical judgment', strength: 95 },
        { text: 'Different moral voices are equally valid', strength: 90 }
      ],
      rules: [
        'Attend to contextual details and relationships',
        'Maintain caring connections',
        'Listen to different moral voices',
        'Recognize interdependence as primary'
      ],
      ontology: 'Relational ontology. Persons are fundamentally connected, not atomistic individuals. Identity formed through relationships.',
      authenticity: 'Feminist consciousness integrating theory with lived experience. Authentic ethics emerges from voices previously silenced.'
    },
    
    ethicalFramework: {
      keyQuestion: 'How do I maintain caring relationships?',
      focus: 'Relationships, context, and responsibility',
      strengths: [
        'Recognizes moral dimensions invisible to abstract principle',
        'Values emotional and contextual factors',
        'Challenges masculine bias in traditional ethics',
        'Emphasizes concrete human needs'
      ],
      limitations: [
        'May struggle to scale beyond personal relationships',
        'Risk of parochialism (favoring "our" people)',
        'Lacks clear decision procedures',
        'Could reinforce gender stereotypes if misapplied'
      ]
    },
    
    assemblyHistory: [
      {
        period: 'Early Development (1936-1960)',
        age: '0-24',
        events: [
          'Born in New York City',
          'Studied literature and psychology',
          'Early exposure to psychoanalytic theory',
          'Marriage and early motherhood'
        ],
        prfImpact: 'Literary background emphasized narrative and voice. Direct experience of caring labor revealed moral dimensions absent from abstract theory.'
      },
      {
        period: 'Research Discovery (1960-1982)',
        age: '24-46',
        events: [
          'Graduate work at Harvard with Kohlberg',
          'Studied women\'s moral development (dissertation on abortion decisions)',
          'Noticed women\'s voices absent from moral development theory',
          'Published In a Different Voice (1982) - revolutionary work'
        ],
        prfImpact: 'Empirical research revealed systematic exclusion of women\'s moral reasoning from psychology. Recognition that "masculine" norms presented as universal.'
      },
      {
        period: 'Care Ethics Development (1982-present)',
        age: '46-88+',
        events: [
          'Founded care ethics as philosophical tradition',
          'Influenced nursing ethics, education, psychology',
          'Continued research on moral voice and development',
          'Feminist critique of mainstream ethics deepened'
        ],
        prfImpact: 'Academic feminist movement provided context for recovery of relational ethics. Community-oriented rather than individualistic cultural experiences informed framework.'
      }
    ],
    
    influences: {
      influencedBy: ['Lawrence Kohlberg', 'Psychoanalytic theory', 'Second-wave feminism', 'Women\'s lived experiences'],
      influenced: ['Nel Noddings', 'Virginia Held', 'Nursing ethics', 'Feminist philosophy']
    },
    
    modernRelevance: [
      'Healthcare ethics (patient-centered care)',
      'Education (relational pedagogy)',
      'Environmental ethics (land as relationship)',
      'Conflict resolution (restorative justice)'
    ]
  },
  
  {
    id: 'singer',
    name: 'Peter Singer',
    dates: '1946-present',
    tradition: 'Consequentialism',
    image: '🌍',
    
    prfProfile: {
      beliefs: [
        { text: 'Suffering is objectively bad regardless of species', strength: 95 },
        { text: 'Equal consideration of equal interests', strength: 100 },
        { text: 'We can calculate and compare welfare', strength: 85 },
        { text: 'Affluent people have strong obligations to help', strength: 90 }
      ],
      rules: [
        'Give equal weight to equal interests',
        'Prevent suffering when possible at reasonable cost',
        'Consider all sentient beings in moral calculations',
        'Prioritize effective interventions'
      ],
      ontology: 'Naturalistic worldview. Sentience (capacity for suffering/wellbeing) is basis for moral consideration. No morally relevant human essence beyond sentience.',
      authenticity: 'Moral progress through consistent application of impartial reason. Authentic ethics means following evidence about suffering wherever it leads.'
    },
    
    ethicalFramework: {
      keyQuestion: 'How can I most effectively reduce suffering?',
      focus: 'Impartial welfare maximization and effective altruism',
      strengths: [
        'Clear guidance for global poverty and animal welfare',
        'Consistent application across species boundaries',
        'Evidence-based and empirically tractable',
        'Motivates significant real-world impact'
      ],
      limitations: [
        'Potentially counterintuitive implications',
        'May ignore special obligations (family, community)',
        'Demanding moral requirements',
        'Controversial views on disability and euthanasia'
      ]
    },
    
    assemblyHistory: [
      {
        period: 'Intellectual Formation (1946-1971)',
        age: '0-25',
        events: [
          'Born in Melbourne, Australia',
          'Jewish family (grandparents fled Nazi Austria)',
          'Studied philosophy at University of Melbourne and Oxford',
          'Influenced by R.M. Hare (preference utilitarianism)'
        ],
        prfImpact: 'Family history of persecution sensitized to arbitrary discrimination. Analytic philosophy training emphasized logical consistency and clear argument.'
      },
      {
        period: 'Animal Liberation (1971-1990)',
        age: '25-44',
        events: [
          'Became vegetarian after reading about factory farming',
          'Published Animal Liberation (1975) - founded modern animal rights movement',
          'Exposed systematic animal suffering in agriculture',
          'Extended utilitarian circle to include animals'
        ],
        prfImpact: 'Direct exposure to scale of animal suffering made speciesism analogous to racism. Logical consistency required extending moral consideration.'
      },
      {
        period: 'Effective Altruism (1990-present)',
        age: '44-78+',
        events: [
          'Published Practical Ethics, The Life You Can Save',
          'Championed global poverty reduction',
          'Co-founded effective altruism movement',
          'Controversial views on euthanasia, disability, infanticide'
        ],
        prfImpact: 'Globalization made global poverty visible and addressable. Internet enabled measurement of charity effectiveness. Willingness to follow logic to controversial conclusions despite social cost.'
      }
    ],
    
    influences: {
      influencedBy: ['Jeremy Bentham', 'J.S. Mill', 'R.M. Hare', 'Henry Sidgwick'],
      influenced: ['Effective Altruism movement', 'Modern animal welfare movement', 'Global health ethics', 'Will MacAskill']
    },
    
    modernRelevance: [
      'Effective Altruism and charity evaluation',
      'Animal welfare and factory farming reform',
      'Global health interventions',
      'Existential risk prioritization'
    ]
  }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { philosophersDB };
}