import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="home-headers-wrapper">
        <h1 className="home-page-header">I Wanna Ride</h1>
        <h3 className="home-page-caption">
          Sick of shredding the trails alone....
        </h3>
      </div>
      <Link to={'/login'} className="link-to-login">
        <button className="home-page-button">Login / Sign Up</button>
      </Link>
      <Link to={'/about'} className="link-to-login">
        <button className="home-page-button">About</button>
      </Link>
    </div>
  );
};

export default Home;
