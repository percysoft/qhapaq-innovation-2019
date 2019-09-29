import React from 'react';

import { storiesOf } from '@storybook/react';

import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';

import Readme from './iconReadme.md';

storiesOf('Welcome Probando', module)
  .addParameters({
    readme: {
      // Show readme before story
      content: Readme,
      // Show readme at the addons panel
      sidebar: Readme,
    },
  })
.add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);