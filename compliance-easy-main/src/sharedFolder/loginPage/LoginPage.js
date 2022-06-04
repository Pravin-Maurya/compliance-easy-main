import React from 'react'
import logo from '../../Asset/logo.png'
import GoogleLogin from './GoogleLogin'

import {Component} from 'react'

import './login.css'

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  }

  onChangeEmail = event => {
    this.setState({email: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }


  onSubmitForm = event => {
    event.preventDefault() 
  }

  renderEmail = () => {
    const {email} = this.state

    return (
      <>
        <label className="input-label" htmlFor="email">
          Email
        </label>
        <input
          type={email}
          id="email"
          className="user-input"
          value={email}
          onChange={this.onChangeEmail}
          placeholder="Enter your email"
          isRequired
        />
      </>
    )
  }

  renderPassword = () => {
    const {password} = this.state

    return (
      <>
        <label className="input-label" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="user-input"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
          isRequired
        />
      </>
    )
  }

  render() {
    return (
      <div className="login-div">
            <img
              src={logo}
              alt="website logo"
              className="web-logo"
            />
            <h1 className='web-title'>Welcome to Compliance Easy</h1>
        <form className="login-form" onSubmit={this.onSubmitForm}>
          <div className="input-container">{this.renderEmail()}</div>
          <div className="input-container">{this.renderPassword()}</div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        <p className='text-google-login'>Or login with</p>
        <GoogleLogin/>
      </div>
    )
  }
}
export default LoginPage