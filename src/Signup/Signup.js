import React, { Component } from 'react';
import "./Signup.css";
import { Link } from 'react-router-dom';

export default class Signup extends Component {
  render() {
    return (
      <div className='box'>
        <h1>Signup</h1>
        <form className='addUser'>
          <div className='inputGroup'>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' placeholder='Enter your name' />
            
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' placeholder='Enter your email' />
            
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' placeholder='Enter your password' />
            
            <button type="submit" className="btn btn-success">Signup</button>
          </div>
        </form>
        
        <div className='login'>
          <p>Already have an account?</p>
          <Link to="/Login" className="btn btn-primary">Login</Link>
        </div>
      </div>
    );
  }
}
