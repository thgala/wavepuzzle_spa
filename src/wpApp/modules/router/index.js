import * as actions from './actions';
import * as selectors from './selectors';
import * as constants from './constants';
import { routerStateReducer as reducer } from 'redux-router';

export default { actions, reducer, constants, selectors };