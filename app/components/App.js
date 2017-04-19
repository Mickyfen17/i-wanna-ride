import React  from 'react';
import { Route, Redirect } from 'react-router-dom';

import Home from './Home';
import LoginContainer from '../containers/LoginContainer';
import CreateUserContainer from '../containers/CreateUserContainer';
import DashboardContainer from '../containers/DashboardContainer';
import CreateRideContainer from '../containers/CreateRideContainer';
import Footer from '../components/Footer';

const App = ({ user: { signedIn }, history }) => {
  return (
    <div>
      <Route exact path='/' component={ Home } />
      <Route path='/login' component={ LoginContainer } />
      <Route path='/create-user' component={ CreateUserContainer } />
      <Route path="/dashboard" render={() => (
        !signedIn ? (
          <Redirect to="/login"/>
        ) : (
          <DashboardContainer />
        )
      )}/>
      <Route path="/create-ride" render={() => (
        !signedIn ? (
          <Redirect to="/login"/>
        ) : (
          <CreateRideContainer history={ history } />
        )
      )}/>
      <Footer />
    </div>
  );
};

export default App;