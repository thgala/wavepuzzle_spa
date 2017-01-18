import { createSelector } from 'reselect';
import { MODULE_NAME } from './../constants';

export const moduleState = state => state[MODULE_NAME];
export const params = createSelector(
  moduleState,
  m => m.params
)
export const paramsStore = createSelector(
  moduleState,
  m => m.params.store
)

export const locationQuery = createSelector(
  moduleState,
  m => m.location.query
)