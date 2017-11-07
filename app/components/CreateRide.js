import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import Input from './Input';
import PlacesSearch from './PlacesSearch';

export default class CreateRide extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      latitude: '',
      longitude: '',
      experience: 'Beginner',
      ridedate: '',
      ridetime: 'Morning',
      error: '',
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.handleNewRide = this.handleNewRide.bind(this);
  }
  handleUserInput(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  }
  handleLocation(location) {
    const { label, location: { lat, lng } } = location;
    this.setState({
      location: label,
      latitude: lat,
      longitude: lng,
    });
  }

  handleEmptyInputs() {
    const keys = Object.keys(this.state);
    return keys.some(key => key !== 'error' && this.state[key] === '');
  }

  handleNewRide() {
    const { user: { id, firstname, email }, addNewRide, history } = this.props;
    const { location, latitude, longitude, experience, ridedate, ridetime } = this.state;
    if (this.handleEmptyInputs()) {
      this.setState({
        error: 'Input field empty',
      });
      return;
    }
    addNewRide(
      id,
      firstname,
      email,
      location,
      latitude,
      longitude,
      experience,
      ridedate,
      ridetime
    ).then(() => {
      history.push('/dashboard');
    });
  }
  render() {
    const { experience, ridedate, ridetime, error } = this.state;
    const { user: { signedIn }, userSignOut, history } = this.props;
    return (
      <div className="create-ride">
        <Header
          className={'signed-in-header'}
          signedIn={signedIn}
          handleSignOut={userSignOut}
          history={history}
        />
        <div className="form-wrapper">
          <article className="create-ride-card">
            <h1>CREATE RIDE</h1>
            <PlacesSearch name="location" handleChange={this.handleLocation} />
            <select
              className="user-input select-input"
              name="experience"
              value={experience}
              onChange={this.handleUserInput}
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
            <Input
              className="user-input"
              placeholder="Date"
              type="date"
              name="ridedate"
              value={ridedate}
              handleChange={this.handleUserInput}
            />
            <select
              className="user-input select-input"
              name="ridetime"
              value={ridetime}
              onChange={this.handleUserInput}
            >
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Evening">Evening</option>
            </select>
            <button className="submit-button" onClick={this.handleNewRide}>
              Submit
            </button>
            {error !== '' && <h4 className="error-text">{error}</h4>}
          </article>
          <Link to={'/dashboard'} className="dashboard-back-link">
            Back
          </Link>
        </div>
      </div>
    );
  }
}
