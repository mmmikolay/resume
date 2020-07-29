export const sectionItems = [
  {
    // Section Item
    title: 'Experience',
    // SectionCard
    listItems: [
      {
        // Sublist
        title: 'BEIJE',
        role: 'React Developer',
        // Dropdown
        descShort: [
          'Worked as the sole front-end developer for beijeped, and attended',
          'to a wide variety of tasks in improving their front-end architecture.',
        ],
        descLong: {
          title: '',
          items: [
            'Upgraded beije codebase from class-based components to React Hooks,',
            'Constructed a store logic with Redux with side-effects and persistence,',
            'Implemented a JWT user authentication flow using async functions,',
            'Made stylings with vanilla css from files and diagrams provided to me.',
          ],
        },
      },

      {

        title: 'Reviews App',
        role: 'Fullstack Developer',
        descShort: [
          'This is my first attempt in modern web development, I built a full-blown website as a proof-of-concept using some highly popular tools, and learning in the process.'],
        descLong: {
          title: '',
          items: [
            'Designed and created a webpage dedicated to reviews using React Hooks,',
            'Constructed a GraphQL server connecting front-end to a MongoDB instance,',
            'Used Apollo client to establish communication with the GraphQL server,',
            'Made a simple cookie-based JWT authentication system for content editing.',
          ],
        },
      },
    ],
  },
  {
    title: 'Technical Skills',
    listItems: [
      {
        title: 'React',
        descShort: ['To the date, React is my primary view library to work with, and I think myself as having a pretty good understanding of it and it\'s  environment.'],
        descLong: {
          items: [
            'Used React with Redux multiple times to implement store architectures for state management.',
            'Utilized React Hooks in various fields including data fetching and handling side-effects.',
            'Used React with axios in the construction of service functionalities to handle api requests.',
          ],
        },
      },

      {
        title: 'GraphQL',
        descShort:
        [
          'I have constructed a GraphQL server connecting a MongoDB ',
          'database instance to the front-end as a part of my first project.',
        ],
      },
    ],
  },
  {
    title: 'Education',
    listItems: [
      {
        title: 'Bachelor of Engineering - METU',
        role: 'Electronics and Computer Engineer',
        descShort: [
          'I have graduated from Electronics Engineering Department of ',
          ' Middle East Technical University, with a specialization in',
          'computer science.',
        ],
      },
    ],
  },
];
