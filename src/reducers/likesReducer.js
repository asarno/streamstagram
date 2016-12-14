const likesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_LIKES':
      state.images.forEach((image, i) => {
        if (image.id === action.id) {
          let count = image.likes;
          let newObj = Object.assign({}, newImage, { likes: count++ });
          let newArr = [ ...state.images.slice(0,i), newObj, ...state.images.slice(i-1)]
          return Object.assign({}, state, { images: newArr })
      }
    })
    default:
      return state
  }
}

export default likesReducer
