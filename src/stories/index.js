import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import ButtonReadme from './ButtonReadme.md';
import './Common/Icon';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Component', module)
  // .addDecorator(withKnobs)
  .addParameters({
    readme: {
      // Show readme before story
      content: ButtonReadme,
      // Show readme at the addons panel
      sidebar: ButtonReadme,
    },
  })
  .add('With Markdown', () => <Button onClick={action('clicked')}>Hello Button</Button>, {
    notes: "popover tooltip"
});
// storiesOf('Buttons', module)
//   .addDecorator(withKnobs)
//   .addParameters({
//     readme: {
//       // Show readme before story
//       content: ButtonReadme,
//       // Show readme at the addons panel
//       sidebar: ButtonReadme,
//     },
//   })
//   .add('Button', () => <Button />);