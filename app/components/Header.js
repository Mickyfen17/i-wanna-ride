import React from 'react'
import { Link } from 'react-router-dom';


const Header = ({ signedIn, className, handleSignOut, history }) => {
  const signedInHeader = () => {
    const userPath = !signedIn ? '/' : '/dashboard';
    return (
      <navbar className='nav'>
        <Link to={ userPath } className={ className }>
          I Wanna Ride
        </Link>
        { signedIn &&
          <button
            onClick={ () => { handleSignOut(); history.push('/'); } }>
            Logout
          </button>
        }
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