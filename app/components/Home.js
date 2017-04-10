import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Home = () =>  {
  return (
    <div>
      <h1 className='home-page-header'>I Wanna Ride</h1>
      <h3 className='home-page-caption'>Sick of shredding the trails alone....</h3>
      <Link to={'/login'} className='link-to-login' >
        <button
          className='home-page-button'>
          Login / SignUp
        </button>
      </Link>
    </div>
  );
};

export default Home;