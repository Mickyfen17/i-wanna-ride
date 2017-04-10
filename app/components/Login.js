import React, { Component } from 'react';


const Login = () =>  {
  return (
    <article className='login-card'>
      <h1>Login</h1>
      <input className='login-input' type="text" />
      <input className='login-input' type="password" />
      <button className='login-button'>Login</button>
    </article>
  );
};

export default Login;