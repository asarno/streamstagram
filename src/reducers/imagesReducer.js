let initialState = [];

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_IMAGES':
      return Object.assign({}, state, {
        images: action.images
      })
    default:
      return state
  }
}

export default imagesReducer
