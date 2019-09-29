import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import ConfigureStore from '@/store/configureStore';
import { Routes } from '@/config/routes';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
const store = ConfigureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router>
        { renderRoutes(Routes) }
        </Router>
    </Provider>
    ,document.getElementById('root') as HTMLElement
);

serviceWorker.unregister();
