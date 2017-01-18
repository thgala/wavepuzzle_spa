import { combineReducers } from 'redux';

import globalLoader from './globalLoader';
import navigator from './navigator';


export default combineReducers({
  globalLoader,
  navigator
})