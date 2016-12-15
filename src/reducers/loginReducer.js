let initialState = {
  username: '',
  password: '',
}

const loginReducer = (state= initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USERNAME':
      return Object.assign({}, state, { username: action.text })
    case 'UPDATE_PASSWORD':
      return Object.assign({}, state, { password: action.text} )
    default:
      return state
  }
}

export default loginReducer
