const defaultState = [];

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'portfolio/GET_LIST':
      return action.data

    default:
      return state
  }
}