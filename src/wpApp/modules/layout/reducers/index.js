import { combineReducers } from 'redux';

import globalLoader from './globalLoader';
import textFields from './textFields';

export default combineReducers({
  globalLoader,
  textFields
})