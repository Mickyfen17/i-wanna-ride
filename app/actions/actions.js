import { USER_SIGNED_IN, USER_SIGNED_OUT, FETCH_USER_RIDES } from './action_types';

export const userSignIn = (user) => {
  return {
    type: USER_SIGNED_IN,
    user,
  };
};

export const userSignOut = () => {
  return {
    type: USER_SIGNED_OUT,
  };
};

export const fetchUserRides = (rides) => {
  return {
    type: FETCH_USER_RIDES,
    rides,
  };
};

export const signInFetch = (username, password) => {
  return () =>
    fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
};

export const createNewUserFetch = (firstname, lastname, location, experience, email, username, password) => {
  return () =>
  fetch('http://localhost:3000/api/users/new', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ firstname, lastname, location, experience, email, username, password }),
  });
};

export const addNewRide = (id, firstname, email, location, experience, ridedate, ridetime) => {
  return () =>
  fetch('http://localhost:3000/api/rides/new', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user_id: id, firstname, email, location, experience, ridedate, ridetime }),
  });
};

export const fetchMatchedRides = (userID, date, time, experience, location) => {
  return () =>
  fetch('http://localhost:3000/api/matchrides', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userID, date, time, experience, location }),
  });
};