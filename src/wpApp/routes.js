import React, { Component } from 'react';
import { Route, Redirect, IndexRoute, IndexRedirect } from 'react-router';
import { ReduxRouter } from 'redux-router';

// Routes
import RootWrap from './routes/_wrap';
import AppRoutes from './routes/index';

export default class Routes extends Component {
  render() {
    return (
      <ReduxRouter>
        <Route path="/">
          {AppRoutes}
        </Route>
        <Route status={404} path="*" component={RootWrap} />
      </ReduxRouter>
    )
  }
}
// <IndexRedirect to={`/${LANGUAGE_LIST[0]}`} />
// <Route status={404} path="*" component={RootWrap} />