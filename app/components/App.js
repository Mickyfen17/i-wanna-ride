import React  from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import LoginContainer from '../containers/LoginContainer';
import CreateUserContainer from '../containers/CreateUserContainer';
import DashboardContainer from '../containers/DashboardContainer';
import CreateRideContainer from '../containers/CreateRideContainer';

const App = () => {
  return (
    <div>
      <Route exact path='/' component={ Home } />
      <Route path='/login' component={ LoginContainer } />
      <Route path='/create-user' component={ CreateUserContainer } />
      <Route path='/dashboard' component={ DashboardContainer } />
      <Route path='/create-ride' component={ CreateRideContainer } />
    </div>
  );
};

export default App;