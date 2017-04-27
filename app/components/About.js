import React from 'react'

import Header from './Header';

const About = ({ signedIn }) => {
  return (
    <div>
      <Header
        className={ 'header-title' }
        signedIn={ signedIn }
      />
      <article className='about-wrapper'>
        <h3 className='about-header'>ABOUT PAGE</h3>
        <p className='about-content'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </article>
    </div>
  );
};

export default About;