const defaultState = [];

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'layout/GET_TEXT_FIELDS':
      return action.data

    default:
      return state
  }
}