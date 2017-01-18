import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';

// Routes
import RootWrap from './_wrap/index.js';
import Home from './home';


const routes = (
  <Route component={RootWrap}>
    <IndexRoute
      name="home"
      component={Home}
    />
  </Route>
)

export default routes;
