import React from 'react'
import { Link } from 'react-router-dom';


const Header = ({ signedIn, firstname, className }) => {
  const signedInHeader = () => {
    if (!signedIn) {
      return (
        <Link to={'/'} className={ className }>
          I Wanna Ride
        </Link>
      );
    }
    return (
      <navbar className='signed-in-nav'>
        <Link to={'/dashboard'} className={ className }>
          IWR
        </Link>
        <h6>Welcome back, { firstname }</h6>
      </navbar>
    );
  };
  return (
    <div>
      { signedInHeader() }
    </div>
  );
};

export default Header;