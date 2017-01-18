const defaultState = null;

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'BRAINTREE_FETCHING':
      return true

    case 'BRAINTREE_STOP_FETCHING':
      return false

    default:
      return state
  }
}