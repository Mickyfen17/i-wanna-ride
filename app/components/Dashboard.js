import React from 'react';

import Header from './Header';

const Dashboard = ({ user: { signedIn, firstname } }) => {
  return (
    <div>
      <Header
        className={ 'signed-in-header' }
        signedIn={ signedIn }
        firstname={ firstname }
      />
      <h1>DASHBOARD</h1>
    </div>
  );
};

export default Dashboard;