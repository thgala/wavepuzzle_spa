const defaultState = null;

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'portfolio/FETCHING':
      return true

    case 'portfolio/STOP_FETCHING':
      return false

    default:
      return state
  }
}