import { pub } from "./pubsub.js";

setInterval(() => {
  pub('everyFiveSeconds');
}, 5e3);

export default [
  ['everyFiveSeconds', () => {
    console.log('Do something in 5 seconds');
  }],

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
