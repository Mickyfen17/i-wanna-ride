import React, { Component } from 'react';

import Header from './Header';
import Input from './Input';

export default class CreateRide extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      experience: 'beginner',
      date: '',
      time: '',
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleExperience = this.handleExperience.bind(this);
  }
  handleUserInput(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  }
  handleExperience(e) {
    const { value } = e.target;
    this.setState({ experience: value });
  }
  render() {
    const { location, experience, date, time } = this.state;
    const { user: { signedIn }, userSignOut, history } = this.props;
    return (
      <div className='create-ride'>
        <Header
          className={ 'signed-in-header' }
          signedIn={ signedIn }
          handleSignOut={ userSignOut }
          history={ history }
        />
        <h1>CREATE RIDE</h1>
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
          placeholder='Date'
          type='date'
          value={ date }
          name='date'
          handleChange={ this.handleUserInput }
        />
        <Input
          className='user-input'
          placeholder='Time'
          type='time'
          value={ time }
          name='time'
          handleChange={ this.handleUserInput }
        />
        <button
          className='submit-button'>
          Submit
        </button>
      </div>
    );
  }
}