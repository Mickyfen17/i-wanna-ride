import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';

export default class Login extends Component  {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
    };
  }

  handleUserInput(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  }
  handleUserSubmit() {
    const { username, password } = this.state;
    console.log(this.props);
    const { userSignIn } = this.props;
    fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
    .then((response) => {
      if(!response.ok) {
        this.setState({
          username: '',
          password: '',
          error: 'Email or password is incorrect',
        });
      } else {
        response.json()
        .then((json) => {
          userSignIn(json.data);
        });
      }
    });
  }

  render() {
    return (
      <div>
        <Header />
        <article className='login-card'>
          <h1>Login</h1>
          <input
            className='user-input'
            placeholder='Username'
            type='text'
            value={ this.state.username }
            name='username'
            onChange={ e => this.handleUserInput(e) }
          />
          <input
            className='user-input'
            placeholder='Password'
            type='password'
            value={ this.state.password }
            name='password'
            onChange={ e => this.handleUserInput(e) }
          />
          <button
            className='submit-button'
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