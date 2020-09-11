import React from 'react';
import { NavLink, Link } from 'react-router-dom';

class Login extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      users: [],
      username: 'tove',
      password: 4430
    }
  }
/*
  componentDidMount() {
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(users => 
      this.setState({users: users})
      )
  }
*/

handleInputChange = (e) => { this.setState({
  [e.target.name]: e.target.value
})
}

handleSubmit = (e) => {
e.preventDefault()

const reqObj = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body:  JSON.stringify(this.state)
}

fetch('http://localhost:3000/api/v1/auth', reqObj)
.then(resp => resp.json())
.then(data => {
  if (data.error) {
    this.setState({
      error: data.error
    })
  } else {
    this.state.loginSuccess(data)
    this.state.history.push('/')
  }
})
}

  render() {
    return(
      <div className="Login">
        <h3>Sign in</h3>
        {this.state.error ? <h6>{this.state.error}</h6> : null}
        <form onSubmit={this.handleSubmit}>
          <label>username:</label>
          <input name={'username'} onChange={this.handleInputChange} value={this.state.username} />
          <br/>
          <br/>
          <label>password:</label>
          <input name={'password'} onChange={this.handleInputChange} value={this.state.password} />
          <input type='submit' value='login' />
        </form>
          <NavLink to="/notes">
            Notes
          </NavLink>
        </div>
    )
  }
}

export default Login;