import { createSelector } from 'reselect';
import { MODULE_NAME } from './../constants';


export const moduleState = state => state[MODULE_NAME];
export const textFields = createSelector(
  moduleState,
  m => m.textFields
)
export const globalLoader = createSelector(
  moduleState,
  m => m.globalLoader
)
