// gitprofile.config.js

const config = {
  github: {
    username: 'cslegasse', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: ['cslegasse', 'Shellhacks_Leftovers_Backup'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'legasse-remon',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: 'ovvey', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'legasse.club',
    phone: '',
    email: 'legasseremon@ufl.edu',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/drive/folders/1DUb2_FfRmx1XRDHhyGYJnO_PXNknCyYQ?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python', 
    'Java', 
    'C', 
    'C++', 
    'Bash', 
    'Metasploit', 
    'Ghidra', 
    'Splunk',
    'Bootstrap', 
    'SQL', 
    'Burpsuite', 
    'Tanium', 
    'Operating Systems', 
    'Wireshark', 
    'Lua',
    'Linux', 
    'GitHub', 
    'Heroku', 
    'Test',
  ],
  experiences: [
    {
      company: 'Raymond James Financial',
      position: 'Cyber Threat Intern',
      from: 'May 2023',
      to: 'July 2023',
      companyLink: 'raymondjames.com',
    },
    {
      company: 'Synapse Softworks (ROBLOX)',
      position: 'Scripter',
      from: 'August 2017',
      to: 'December 2023',
      companyLink: 'x.synapse.to',
    },
    {
      company: 'University of Florida',
      position: 'Assistant Researcher',
      from: 'June 2022',
      to: 'Present',
      companyLink: 'fics.institute.ufl.edu',
    },
    {
      company: 'IBM',
      position: 'X-Force Security Intern',
      from: 'August 2024',
      to: 'December 2024',
      companyLink: 'ibm.com',
    },
    {
      company: 'Mastercard',
      position: 'Security Engineering Intern',
      from: 'August 2023',
      to: 'December 2023',
      companyLink: 'mastercard.us',
    },
    
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'University of Florida',
      degree: 'Bachelor of Science in Computer Science',
      from: '2022',
      to: '2025',
    },
    // {
    //   institution: 'VNU-HCM High School for the',
    //   degree: 'Degree',
    //   from: '2012',
    //   to: '2014',
    // },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    

  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-8MQNLGXFVR', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

 
};

export default config;
