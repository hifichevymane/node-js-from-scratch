export default [
  ['/', () => {
    console.count('visit');
  }],

  ['/', (args, { languages }) => {
    if (languages.en) {
      console.warn('Oh no. It is an english man');
    }
  }],

  ['/api/library-overview', (args, { languages }) => {
    for (const lang in languages) {
      console.count(lang);
    }
  }]
];
