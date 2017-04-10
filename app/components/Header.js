import React from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <Link to={'/'} className='header-title'>
      I Wanna Ride
    </Link>
  );
};

export default Header;