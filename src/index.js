import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { createHashHistory } from 'history';
import configureStore from './configureStore';
import AppRoutes from './wpApp/routes';

const store = configureStore()
window.globalStore = store;


ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
  document.getElementById('wavepuzzleApp')
);
