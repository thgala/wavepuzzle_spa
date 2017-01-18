import { push } from 'redux-router';

export function transitionTo(url){
  return (dispatch, getState) => {
    dispatch(push(`/${getState().store.active.code}${url}`))
  }
}