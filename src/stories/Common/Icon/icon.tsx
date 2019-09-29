import * as React from 'react';
import { withDocs } from 'storybook-readme';
import { WithPropTypes } from '.storybook/Containers/WithPropTypes';
import { IconComponent }  from '../../../components/icon';
import * as readme from './icon';

const Wrapper = () => (
  <div>
    <IconComponent/>
  </div>
);

export default () => {
  return withDocs(
    readme,
    WithPropTypes({
      Component: IconComponent,
      RenderComponent: Wrapper,
      showProp: false,
    }),
  );
};
