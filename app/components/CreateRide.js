import React, { Component } from 'react';

import Header from './Header';
import Input from './Input';

export default class CreateRide extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      experience: 'Beginner',
      ridedate: '',
      ridetime: '',
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleExperience = this.handleExperience.bind(this);
    this.handleNewRide = this.handleNewRide.bind(this);
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
  handleNewRide() {
    const { user: { id, firstname, email }, addNewRide } = this.props;
    const { location, experience, ridedate, ridetime } = this.state;
    addNewRide(id, firstname, email, location, experience, ridedate, ridetime)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
  }
  render() {
    const { location, experience, ridedate, ridetime } = this.state;
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
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
          <option value="Expert">Expert</option>
        </select>
        <Input
          className='user-input'
          placeholder='Date'
          type='date'
          value={ ridedate }
          name='ridedate'
          handleChange={ this.handleUserInput }
        />
        <Input
          className='user-input'
          placeholder='Time'
          type='time'
          value={ ridetime }
          name='ridetime'
          handleChange={ this.handleUserInput }
        />
        <button
          className='submit-button'
          onClick={ this.handleNewRide }>
          Submit
        </button>
      </div>
    );
  }
}