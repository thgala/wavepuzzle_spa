import { combineReducers } from 'redux';

import list from './list';
import active from './active';
import fetching from './fetching';


export default combineReducers({
  list,
  active,
  fetching
})