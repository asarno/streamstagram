let initialState = { images: [] };

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_IMAGES':
      return Object.assign({}, state, {
        images: action.images
      })
      case 'ADD_LIKES':
        const i = action.id-1;
        console.log(state.images[i].likes + 1)
        let newImageArr =  [
          ...state.images.slice(0,i),
          Object.assign({}, state.images[i], { likes: state.images[i].likes + 1}),
          ...state.images.slice(i + 1)
        ]
        console.log(newImageArr)
        return Object.assign({}, state, {
          images: newImageArr
        })
      default:
        return state
  }
}

export default imagesReducer
