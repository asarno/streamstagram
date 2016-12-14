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
    case 'LOG_IN':
      return Object.assign({}, state, { view: 'home' })
    default:
      return state
  }
}

export default loginReducer
