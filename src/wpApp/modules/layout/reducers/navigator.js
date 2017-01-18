const defaultState = true;

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'layout/NAVIGATOR_TRIGGER':
      return !state

    default:
      return state
  }
}