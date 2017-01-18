import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import { createHistory } from 'history';

import reducers from './wpApp/reducers';
import promise from './_middlewares/promise';


export default function configureStore(initialState) {
  const logger = createLogger({
    collapsed: true,
    predicate: () =>
    process.env.NODE_ENV === `development`, // eslint-disable-line no-unused-vars
  });

  const middleware = compose(
    applyMiddleware(thunkMiddleware, promise), //logger
    reduxReactRouter({ createHistory })
  );

  const store = middleware(createStore)(combineReducers(reducers), initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./wpApp/reducers', () => {
      const nextRootReducer = require('./wpApp/reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
