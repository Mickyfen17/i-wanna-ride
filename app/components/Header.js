import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ signedIn, className, handleSignOut, history }) => {
  const signedInHeader = () => {
    const userPath = !signedIn ? '/' : '/dashboard';
    return (
      <div className="nav">
        <Link to={userPath} className={className}>
          I Wanna Ride
        </Link>
        {signedIn && (
          <button
            className="logout-button"
            onClick={() => {
              handleSignOut();
              history.push('/');
            }}
          >
            Logout
          </button>
        )}
      </div>
    );
  };
  return <div className="navbar">{signedInHeader()}</div>;
};

export default Header;
