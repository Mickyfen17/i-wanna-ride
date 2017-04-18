import React from 'react';
import { browserHistory } from 'react-router';
import { shallow } from 'enzyme';
import fetchMock from 'fetch-mock';

import configureMockStore from 'redux-mock-store';
import { userSignIn, userSignOut, userRidesAction, signInFetch, createNewUserFetch, addNewRide, deleteRide, fetchMatchedRides, fetchAllUserRides } from '../../actions/actions';

const store = configureMockStore()();

const mockData = {
  user: {
    id: 1,
    firstname: 'Mike',
    lastname: 'Fenwick',
    location: 'Denver',
    experience: 'Beginner',
    username: 'mikefen',
    email: 'abc@abc.com',
    password: 'password',
    signedIn: true,
  },
  rides: [
    {
      id: 11,
      user_id: 1,
      firstname: 'Mike',
      email: 'abc@abc.com',
      location: 'Denver',
      latitude: '39.7392358',
      longitude: '-104.990251',
      experience: 'Beginner',
      ridedate: '2017-01-01',
      ridetime: 'Morning',
    },
  ],
};

describe('actions', () => {
  afterEach(() => {
    store.clearActions();
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  });

  it('creates USER_SIGNED_IN when initiating signIn action', () => {
    const expectedAction = { type: 'USER_SIGNED_IN', user: mockData.user };
    store.dispatch(userSignIn(mockData.user));

    const createdActions = store.getActions();

    expect(createdActions[0]).toEqual(expectedAction);
    expect(createdActions.length).toEqual(1);
  });

  it('creates USER_SIGN_OUT when initiating signOut action', () => {
    const expectedAction = { type: 'USER_SIGNED_OUT' };
    store.dispatch(userSignOut());

    const createdActions = store.getActions();

    expect(createdActions[0]).toEqual(expectedAction);
    expect(createdActions.length).toEqual(1);
  });

  it('creates FETCH_USE_RIDES when initiating showFavorites action', () => {
    let expectedAction = { type: 'FETCH_USER_RIDES', rides: mockData.rides };
    store.dispatch(userRidesAction(mockData.rides));

    let createdActions = store.getActions();

    expect(createdActions[0]).toEqual(expectedAction);
    expect(createdActions.length).toEqual(1);
  });
});