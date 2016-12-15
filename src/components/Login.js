import React, { Component } from 'react'
import { reactiveComponent } from 'omnistream'
import { username, password, goHome } from '../actions/actions'

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleChange= this.handleChange.bind(this)
    this.userLogin= this.userLogin.bind(this)
  }

  handleChange(e) {
    if (e.target.id === 'username') this.props.dispatch(username(e.target.value))
    if (e.target.id === 'password') this.props.dispatch(password(e.target.value))
  }

  userLogin(e) {
    e.preventDefault();
    this.props.dispatch(goHome());
  }

  render() {
    return (
    <div className='loginContainer' style={{backgroundImage: `url('./background.jpg')`}}>
      <form>
        <h1>streamstagram</h1>
        <div className='formElems'>
          <label>Username</label><input id='username' value={this.props.username} onChange={this.handleChange}/>
          <label>Password</label><input id='password' type='password' value={this.props.password} onChange={this.handleChange}/>
          <button onClick={this.userLogin}>Sign In</button>
        </div>
      </form>
    </div>
    )
  }
}

export default reactiveComponent(Login, 'loginState$', 'viewsState$');
