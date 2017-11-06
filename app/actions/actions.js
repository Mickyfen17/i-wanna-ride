import 'whatwg-fetch';

import {
  USER_SIGNED_IN,
  USER_SIGNED_OUT,
  FETCH_USER_RIDES,
} from './action_types';

export const userSignIn = user => {
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

export const userRidesAction = rides => {
  return {
    type: FETCH_USER_RIDES,
    rides,
  };
};

export const signInFetch = (username, password) => {
  return () =>
    fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
};

export const createNewUserFetch = (
  firstname,
  lastname,
  location,
  experience,
  email,
  username,
  password,
) => {
  return dispatch =>
    fetch('/api/users/new', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstname,
        lastname,
        location,
        experience,
        email,
        username,
        password,
      }),
    })
      .then(response => response.json())
      .then(json => dispatch(userSignIn(json.data)));
};

export const addNewRide = (
  id,
  firstname,
  email,
  location,
  latitude,
  longitude,
  experience,
  ridedate,
  ridetime,
) => {
  return () =>
    fetch('/api/rides/new', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_id: id,
        firstname,
        email,
        location,
        latitude,
        longitude,
        experience,
        ridedate,
        ridetime,
      }),
    });
};

export const deleteRide = (user_id, ride_id) => {
  return () =>
    fetch(`/api/users/${user_id}/rides/${ride_id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id, ride_id }),
    });
};

export const fetchMatchedRides = (userID, date, time, experience, location) => {
  return () =>
    fetch('/api/matchrides', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userID, date, time, experience, location }),
    }).then(response => response.json());
};

export const fetchAllUserRides = userID => {
  return dispatch =>
    fetch(`/api/users/${userID}/rides`)
      .then(response => response.json())
      .then(json => dispatch(userRidesAction(json.data)));
};
