// gitprofile.config.js

const config = {
  github: {
    username: 'ParisaRostaami', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'parisa-rostami',
//     twitter: 'arif_szn',
//     mastodon: 'arifszn@mastodon.social',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '',
    website: 'https://ParisaRostaami.github.io',
    phone: '',
    email: 'Parisarostaamii@gmail.com',
  },
  resume: {
    fileUrl:
      'https://.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Java',
    'Matlab',
    'HTML',
    'CSS',
    'NumPy',
    'Pandas',
    'Scikit-Learn',
    'Pytorch',
    'Git',
    'Jupyter Lab',
  ],
  experiences: [
    {
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'Robotics Teaching Qualification',
      body: 'Robotics and Mechatronic Union of Iran (NURMSA)',
      year: 'September 2022',
      link: 'https://certificate.robodars.com/'
    },
    {
      name: 'Machine Learning',
      body: 'Coursera',
      year: 'Augest 2022',
      link: 'https://www.coursera.org/share/7ee9fe76906c224b8516c88784707bd4'
    },
    {
      name: 'Advanced NLP with spaCy',
      body: 'DataCamp',
      year: 'July 2022',
      link: 'https://www.datacamp.com/statement-of-accomplishment/course/d7ad06e53564f424aee8aad6c5b2790de7746383?raw=1'
    },

    {
      name: 'Natural Language Processing',
      body: 'Coursera',
      year: 'March 2023',
      link: 'https://www.coursera.org/share/'
    },
  ], 
  education: [
    {
      institution: 'University of Science and Technology of Mazandaran',
      degree: 'B.Sc. Computer Engineering',
      from: '2017',
      to: '2022',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Project Name',
      description:
        ' ',
      imageUrl: ' ',
      link: ' ',
    },
//     {
//       title: ' ',
//       description:
//         ' ',
//       imageUrl: 'https://via.placeholder.com/250x250',
//       link: 'https://example.com',
//     },
  ],
  // Display blog posts from your medium or dev account. (Optional)
//   blog: {
//     source: 'dev', // medium | dev
//     username: 'arifszn', // to hide blog section, keep it empty
//     limit: 2, // How many posts to display. Max is 10.
//   },
//   googleAnalytics: {
//     id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
//   },
//   // Track visitor interaction and behavior. https://www.hotjar.com
//   hotjar: {
//     id: '',
//     snippetVersion: 6,
//   },
  themeConfig: {
    defaultTheme: 'valentine',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

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

  // Optional Footer. Supports plain text or HTML.
//   footer: `Made with <a 
//       class="text-primary" href="https://github.com/arifszn/gitprofile"
//       target="_blank"
//       rel="noreferrer"
//     >GitProfile</a> and ❤️`,
};

export default config;
