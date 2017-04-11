import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import LoginContainer from '../containers/LoginContainer';
import CreateUser from './CreateUser';

export default class App extends Component {

  render() {
    return (
      <div>
        <Route exact path='/' component={ Home } />
        <Route path='/login' component={ LoginContainer } />
        <Route path='/create-user' component={ CreateUser } />
      </div>
    );
  }
}