let initialState = { view: 'login' }

const viewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_IMAGE':
      return Object.assign({}, state, { view: 'image', curImage: image })
    case 'GO_HOME':
      return Object.assign({}, state, { view: 'home' })
    default:
      return state
  }
}

export default viewsReducer
