import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import Input from './Input';

export default class CreateUser extends Component  {
  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname: '',
      location: '',
      experience: 'beginner',
      email: '',
      username: '',
      password: '',
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleExperience = this.handleExperience.bind(this);
    this.handleUserCreate = this.handleUserCreate.bind(this);
  }

  handleUserInput(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  }
  handleUserCreate() {
    const { createNewUserFetch } = this.props;
    const { firstname, lastname, location, experience, email, username, password } = this.state;
    createNewUserFetch(firstname, lastname, location, experience, email, username, password)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
  }
  handleExperience(e) {
    const { value } = e.target;
    this.setState({ experience: value });
  }

  render() {
    const { firstname, lastname, location, experience, email, username, password } = this.state;
    const { user: { signedIn } } = this.props;
    return (
      <div>
        <Header
          className={ 'header-title' }
          signedIn={ signedIn }
        />
        <article className='create-user-card'>
          <h1>Create User</h1>
          <Input
            className='user-input firstname'
            placeholder='First Name'
            type='text'
            value={ firstname }
            name='firstname'
            handleChange={ this.handleUserInput }
          />
          <Input
            className='user-input lastname'
            placeholder='Last Name'
            type='text'
            value={ lastname }
            name='lastname'
            handleChange={ this.handleUserInput }
          />
          <Input
            className='user-input'
            placeholder='Location'
            type='text'
            value={ location }
            name='location'
            handleChange={ this.handleUserInput }
          />
          <select
            className='user-input'
            value={ experience }
            onChange={ this.handleExperience }
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
            <option value="expert">Expert</option>
          </select>
          <Input
            className='user-input'
            placeholder='Email'
            type='text'
            value={ email }
            name='email'
            handleChange={ this.handleUserInput }
          />
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
            onClick={ this.handleUserCreate } >
            Submit
          </button>
        </article>
      </div>
    );
  }
}