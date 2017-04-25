import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import LoginContainer from '../../app/containers/LoginContainer';
import Login from '../../app/components/Login';

const mockStore = configureMockStore()({
  user: {
    id: 1,
    firstname: 'Mike',
    lastname: 'Fenwick',
    location: 'Denver',
    experience: 'Beginner',
    username: 'mikefen',
    email: 'abc@abc.com',
    password: 'password',
  },
});

const setup = () => {
  const Container = mount(
    <Provider store={ mockStore } >
      <LoginContainer />
    </Provider>,
  );
  const Component = Container.find(Login);
  return {
    Container,
    Component,
  };
};

describe('LoginContainer', () => {

});