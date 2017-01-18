import { combineReducers } from 'redux';

import fetching from './fetching';

import main from './main';
import creditCard from './creditCard';
import paypal from './paypal';


export default combineReducers({
  fetching,
  main,
  creditCard,
  paypal
})