import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import Input from './Input';
import PlacesSearch from './PlacesSearch';

export default class CreateUser extends Component {
  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname: '',
      location: '',
      experience: 'Beginner',
      email: '',
      username: '',
      password: '',
      error: '',
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.handleUserCreate = this.handleUserCreate.bind(this);
  }

  handleUserInput(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleEmptyInputs() {
    const keys = Object.keys(this.state);
    return keys.some(key => key !== 'error' && this.state[key] === '');
  }

  validateEmail(email) {
    const valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return valid.test(email);
  }

  handleUserCreate() {
    const { createNewUserFetch, history } = this.props;
    const { firstname, lastname, location, experience, email, username, password } = this.state;
    if (!this.validateEmail(email)) {
      this.setState({
        error: 'Please enter a valid email',
      });
      return;
    }
    if (this.handleEmptyInputs()) {
      this.setState({
        error: 'Input field empty',
      });
      return;
    }
    createNewUserFetch(
      firstname,
      lastname,
      location,
      experience,
      email,
      username,
      password
    ).then(() => {
      history.push('/dashboard');
    });
  }

  handleLocation(location) {
    const { label } = location;
    this.setState({ location: label });
  }

  render() {
    const { firstname, lastname, experience, email, username, password, error } = this.state;
    const { user: { signedIn } } = this.props;
    return (
      <div>
        <Header className={'header-title'} signedIn={signedIn} />
        <div className="form-wrapper">
          <article className="create-user-card">
            <h1>Create User</h1>
            <Input
              className="user-input firstname"
              placeholder="First Name"
              type="text"
              value={firstname}
              name="firstname"
              handleChange={this.handleUserInput}
            />
            <Input
              className="user-input lastname"
              placeholder="Last Name"
              type="text"
              value={lastname}
              name="lastname"
              handleChange={this.handleUserInput}
            />
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
              placeholder="Email"
              type="text"
              value={email}
              name="email"
              handleChange={this.handleUserInput}
            />
            <Input
              className="user-input"
              placeholder="Username"
              type="text"
              value={username}
              name="username"
              handleChange={this.handleUserInput}
            />
            <Input
              className="user-input"
              placeholder="Password"
              type="password"
              value={password}
              name="password"
              handleChange={this.handleUserInput}
            />
            <button className="submit-button" onClick={this.handleUserCreate}>
              Submit
            </button>
            {error !== '' && <h4 className="error-text">{error}</h4>}
            <h6>Already have an account?</h6>
            <Link to={'/login'} className="login-user-link">
              Login
            </Link>
          </article>
        </div>
      </div>
    );
  }
}
