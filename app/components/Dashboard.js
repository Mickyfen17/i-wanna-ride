import React from 'react';

import Header from './Header';

const Dashboard = ({ user: { signedIn, firstname } }) => {
  const userSignedIn = signedIn ? <h3>Welcome back, { firstname }</h3> : <h3>Please Login</h3>;
  return (
    <div className='dashboard'>
      <Header
        className={ 'signed-in-header' }
        signedIn={ signedIn }
      />
      <h1>DASHBOARD</h1>
      { userSignedIn }
    </div>
  );
};

export default Dashboard;