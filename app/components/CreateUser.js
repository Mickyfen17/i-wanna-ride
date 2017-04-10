import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';

export default class CreateUser extends Component  {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Create User</h1>
      </div>
    );
  }
}