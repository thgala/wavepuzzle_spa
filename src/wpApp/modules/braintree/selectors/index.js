import { createSelector } from 'reselect';
import { MODULE_NAME } from './../constants';


export const moduleState = state => state[MODULE_NAME];
export const fetching = createSelector(
  moduleState,
  m => m.fetching
)