import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';

export default class CreateUser extends Component  {
  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname: '',
      location: '',
      experience: '',
      email: '',
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

  render() {
    return (
      <div>
        <Header />
        <article className='create-user-card'>
          <h1>Create User</h1>
          <input
            className='user-input firstname'
            placeholder='First Name'
            type='text'
            value={ this.state.firstname }
            name='firstname'
            onChange={ e => this.handleUserInput(e) }
          />
          <input
            className='user-input lastname'
            placeholder='Last Name'
            type='text'
            value={ this.state.lastname }
            name='lastname'
            onChange={ e => this.handleUserInput(e) }
          />
          <input
            className='user-input'
            placeholder='Location'
            type='text'
            value={ this.state.location }
            name='location'
            onChange={ e => this.handleUserInput(e) }
          />
          <input
            className='user-input'
            placeholder='Experience'
            type='text'
            value={ this.state.experience }
            name='experience'
            onChange={ e => this.handleUserInput(e) }
          />
          <input
            className='user-input'
            placeholder='Email'
            type='text'
            value={ this.state.email }
            name='email'
            onChange={ e => this.handleUserInput(e) }
          />
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
          <button className='submit-button'>Submit</button>
        </article>
      </div>
    );
  }
}