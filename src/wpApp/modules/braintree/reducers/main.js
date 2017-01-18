const
  defaultState = {
    err: {},
    instance: null
  }


export default function (state = defaultState, action) {
  switch (action.type) {

    case 'SET_BT_MAIN_DATA':
      return Object.assign({}, state, action.data)

    default:
      return state
  }
}