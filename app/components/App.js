import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import Login from './Login';

export default class App extends Component {

  render() {
    return (
      <div>
        <Route exact path='/' component={ Home } />
        <Route path='/login' component={ Login } />
      </div>
    );
  }
}