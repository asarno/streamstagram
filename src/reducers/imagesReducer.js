let initialState = { images: [] };

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_IMAGES':
      return Object.assign({}, state, {
        images: action.images
      })
      case 'ADD_LIKES':
        state.images.forEach((image, i) => {
          if (image.id === action.id) {
            let count = image.likes++;
            let newObj = Object.assign({}, { likes: count });
            let newArr = [ ...state.images.slice(0,i), newObj, ...state.images.slice(i-1)]
            return Object.assign({}, state, { images: newArr })
        }
      })
    default:
      return state
  }
}

export default imagesReducer
