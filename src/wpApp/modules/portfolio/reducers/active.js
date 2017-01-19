const defaultState = {
  id: null,
  title: '',
  description: '',
  tags: [],
  medias: [{
    media_url: '',
    image_url: '',
    caption: ''
  }]
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'portfolio/SET_ACTIVE':
      return action.active

    default:
      return state
  }
}