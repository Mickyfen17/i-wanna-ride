import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';

export default class Login extends Component  {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  handleUserInput(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  }
  handleUserSubmit() {
    this.setState({
      username: '',
      password: '',
    });
  }
  render() {
    return (
      <div>
        <Header />
        <article className='login-card'>
          <h1>Login</h1>
          <input
            className='login-input'
            type='text'
            value={ this.state.username }
            name='username'
            onChange={ e => this.handleUserInput(e) }
          />
          <input
            className='login-input'
            type='password'
            value={ this.state.password }
            name='password'
            onChange={ e => this.handleUserInput(e) }
          />
          <button
            className='login-button'
            onClick={ () => this.handleUserSubmit() } >
            Login
          </button>
          <Link to={ '/create-user' } className='create-user-link' >
            Create New User
          </Link>
        </article>
      </div>
    );
  }
}