import { addDecorator, configure } from '@storybook/react';
import { addReadme } from 'storybook-readme';

addDecorator(addReadme);

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);


// import { configure } from '@storybook/react';

// const req = require.context('../src/stories/Common/', true, /\.storie\.tsx$/);

// function loadStories() {
//   req.keys().forEach(filename => req(filename));
// }

// configure(loadStories, module);