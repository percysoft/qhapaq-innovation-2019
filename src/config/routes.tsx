import * as React from 'react';
import {Home} from '@/features/Home';

const NotFound:React.SFC<{}> = ()=><div>Not found</div>;

export const Routes:Object[] = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
];

