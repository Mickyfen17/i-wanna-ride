import React from 'react';

import Header from './Header';

const CreateRide = ({ user: { signedIn }, userSignOut, history }) => {
  return (
    <div className='create-ride'>
      <Header
        className={ 'signed-in-header' }
        signedIn={ signedIn }
        handleSignOut={ userSignOut }
        history={ history }
      />
      <h1>CREATE RIDE</h1>
    </div>
  );
};

export default CreateRide;