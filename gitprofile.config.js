// gitprofile.config.js

const config = {
  github: {
    username: 'ParisaRostaami', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: ['ParisaRostaami', 'ParisaRostaami.github.io', 'Hands-On-Data-Science-and-Python-Machine-Learning'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'parisa-rostami',
    twitter: '',
    mastodon: '',
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
    email: 'Parisa.rostaamii@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Java',
    'Matlab',
    'SQL',
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
      company: 'USTM AI Research Group',
      position: 'Undergraduate Research Assistant',
      from: 'Jun 2018',
      to: 'Feb 2023',
      // companyLink: 'https://example.com',
    },
    {
      company: 'COHB lab Research Group ',
      position: 'Remote Research Assistant - Intern',
      from: 'Nov 2022',
      to: 'May 2023',
      // companyLink: 'https://example.com',
    },
    {
      company: 'University of Science and Technology of Mazandaran and Kharazmi University',
      position: 'Course Instructor ',
      from: ' Sep 2021',
      to: 'May 2023',
      // companyLink: ' ',
    },
    {
      company: 'University of Science and Technology of Mazandaran',
      position: 'Teaching Assistant',
      from: 'Sep 2020',
      to: 'Jun 2022',
      // companyLink: ' ',
    },
    {
      company: 'University of Science and Technology of Mazandaran',
      position: 'Co-Founder of USTM AI School',
      from: 'Jan 2021',
      to: 'Feb 2022',
      // companyLink: ' ',
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
      name: 'Machine Learning Specialization',
      body: 'Coursera',
      year: 'August 2022',
      link: 'https://www.coursera.org/share/7ee9fe76906c224b8516c88784707bd4'
    },
    {
      name: ' Mathematics for Machine Learning and Data Science Specialization',
      body: 'Coursera',
      year: 'August 2023',
      link: 'https://coursera.org/verify/specialization/68KLP87VJQEM'
    },

    {
      name: 'Natural Language Processing Specialization',
      body: 'Coursera',
      year: 'March 2023',
      link: 'https://coursera.org/verify/specialization/2E63A8EPQ9H6'
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
  // externalProjects: [
  //   {
  //     title: '',
  //     description:
  //       ' ',
  //     imageUrl: ' ',
  //     link: ' ',
  //   },
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
