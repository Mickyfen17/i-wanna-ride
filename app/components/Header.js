import React from 'react'
import { Link } from 'react-router-dom';


const Header = ({ signedIn, className }) => {
  return (
    <Link to={'/'} className={ className }>
      I Wanna Ride
    </Link>
  );
};

export default Header;