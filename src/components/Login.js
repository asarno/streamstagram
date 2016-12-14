import React, { Component } from 'react'
import { reactiveComponent } from 'omnistream'
import { username, password, login } from '../actions/actions'

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleChange= this.handleChange.bind(this)
  }

  handleChange(e) {
    if (e.target.id === 'username') this.props.dispatch(username(e.target.value))
    if (e.target.id === 'password') this.props.dispatch(password(e.target.value))
  }

  render() {
    console.log(this.props)
    return (
    <form>
      <label>Username</label><input id='username' value={this.props.username} onChange={this.handleChange}/>
      <label>Password</label><input id='password' value={this.props.password} onChange={this.handleChange}/>
      <button>Sign In</button>
    </form>
    )
  }
}

export default reactiveComponent(Login, 'loginState$');
