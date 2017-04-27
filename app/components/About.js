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
          Have you ever wanted to go out for a mountain bike ride but can't find
          anyone you know to ride with?
          Maybe you're at home or in a new place and you end up missing out on an
          awesome ride because you don't want to ride alone. I Wanna Ride helps fix
          this problem. It's an application that matches mountain bike riders who want
          to ride the same trail at the same time. The app allows users to add the
          date, time and location where they want to ride and then checks the system
          for other riders with matching details.
          Upon succesful match, users see a 'Match Found' button on their dashboard
          which links them to the other riders information. Matched riders are then
          free to arrange a meet up.
        </p>
      </article>
    </div>
  );
};

export default About;