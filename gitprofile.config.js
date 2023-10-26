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
    linkedin: 'legasseremon',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'legasseahs1@gmail.com',
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
    'Flask', 
    'Lua',
    'MaterialUI',
    'Linux', 
    'GitHub', 
    'Heroku', 
  ],
  experiences: [
    {
      company: 'Synapse X',
      position: 'Script Developer',
      from: 'August 2017',
      to: 'Present',
      companyLink: 'x.synapse.to',
    },
    {
      company: 'Raymond James Financial',
      position: 'Cyber Threat Intern',
      from: 'May 2023',
      to: 'July 2023',
      companyLink: 'https://www.raymondjames.com/',
    },
    {
      company: 'University of Florida',
      position: 'Assistant Researcher',
      from: 'June 2022',
      to: 'Present',
      companyLink: 'https://fics.institute.ufl.edu/',
    },
    // {
    //   company: 'Company Name',
    //   position: 'Position',
    //   from: 'July 2019',
    //   to: 'August 2021',
    //   companyLink: 'https://example.com',
    // },
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
     {
       title: 'Synapse X',
       description:
         'A multitool hack client for cross-platform gaming.',
       imageUrl: 'https://logos.fandom.com/wiki/Synapse_X?file=Synapse_X_2018.png',
       link: 'https://x.synapse.to',
     },
     {
       title: 'Project Name',
       description:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
       imageUrl: 'https://via.placeholder.com/250x250',
       link: 'https://example.com',
     },
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
