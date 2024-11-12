import React, { Component } from 'react'
import "./login.css"
import { Link } from 'react-router-dom';

export default class Login extends Component {
  render() {
    return (
        <div className='box'>

        <h1>Login</h1>
        <form className='addUser'>
          <div className='inputGroup'>
            <label htmlFor='email'>Email</label>
            <input type='email'id='email' placeholder='Enter  yor email'></input>
            <label htmlFor='password'>password</label>
            <input type='password 'id='password' placeholder='Enter  password'></input>
          
          <button type="submit" class = "btn btn-success" >LOGIN</button>
          </div>
        </form>
       <div className='signup'>
       <p> Not having account?</p>
        <Link to="/" className='btn btn-danger'> signup</Link>
       </div>
      </div>
    )
  }
}
