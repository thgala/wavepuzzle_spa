import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';

// Routes
import RootWrap from './_wrap/index.js';
import Home from './home';
import Portfolio from './portfolio';


const routes = (
  <Route component={RootWrap}>
    <Route
      path="/"
      name="home"
      component={Home}
    />

    <Route path="portfolio">
      <IndexRoute
        name="portfolio"
        component={Portfolio}
      />
      <Route
        path=":portfolioItemId"
        name="portfolioItem"
        component={Portfolio}
      />
    </Route>
  </Route>
)

export default routes;
