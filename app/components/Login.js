import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import Input from './Input';

export default class Login extends Component  {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  }
  handleUserSubmit() {
    const { username, password } = this.state;
    const { userSignIn, signInFetch, history } = this.props;
    signInFetch(username, password)
    .then((response) => {
      if (!response.ok) {
        this.setState({
          username: '',
          password: '',
          error: 'Email or password is incorrect',
        });
      } else {
        response.json()
        .then((json) => {
          userSignIn(json.data);
          history.push('/dashboard');
        });
      }
    });
  }

  render() {
    const { username, password, error } = this.state;
    const { user: { signedIn } } = this.props;
    return (
      <div>
        <Header
          className={ 'header-title' }
          signedIn={ signedIn }
        />
        <div className='form-wrapper'>
          <article className='login-card'>
            <h1>Login</h1>
            <Input
              className='user-input'
              placeholder='Username'
              type='text'
              value={ username }
              name='username'
              handleChange={ this.handleUserInput }
            />
            <Input
              className='user-input'
              placeholder='Password'
              type='password'
              value={ password }
              name='password'
              handleChange={ this.handleUserInput }
            />
            <button
              className='submit-button'
              onClick={ () => this.handleUserSubmit() } >
              Login
            </button>
            { error !== '' && <h4 className='error-text'>{ error }</h4> }
            <Link to={ '/create-user' } className='create-user-link' >
              Create New User
            </Link>
          </article>
        </div>
      </div>
    );
  }
}