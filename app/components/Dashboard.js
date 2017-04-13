import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';

const Dashboard = ({ user: { signedIn, firstname }, userSignOut, history }) => {
  const userSignedIn = signedIn ? <h3>Welcome back, { firstname }</h3> : <h3>Please Login</h3>;
  const addNewRide = signedIn &&
  <Link to={ '/create-ride' }>
    <button>Add new ride</button>
  </Link>

  return (
    <div className='dashboard'>
      <Header
        className={ 'signed-in-header' }
        signedIn={ signedIn }
        handleSignOut={ userSignOut }
        history={ history }
      />
      <h1>DASHBOARD</h1>
      { userSignedIn }
      { addNewRide }
    </div>
  );
};

export default Dashboard;