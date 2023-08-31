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
  hotjar: {
    id: '',
    snippetVersion: 6,
    },
  },
  education: [
    {
      institution: 'University of Science and Technology of Mazandaran',
      degree: 'B.Sc. Computer Engineering',
      from: '2017',
      to: '2022',
    },
],
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
  //   education: [
  //   {
  //   institution: 'University of Science and Technology of Mazandaran',
  //   degree: 'B.Sc. Computer Engineering',
  //   from: '2017',
  //   to: '2022',
  //   },
  // ],
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


  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    // {
    //   title: 'Person Re-Identification',
    //   description:
    //     '',
    //   imageUrl: 'data:image/jpeg;base64,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',
    //   link: '',
    // },
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
