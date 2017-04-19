import React from 'react';
import { shallow, mount } from 'enzyme';
import { Route } from 'react-router-dom';


import App from '../../components/App';

describe('testing App', () => {
  const defaultUser = {
    signedIn: false,
  };

  it('should contain 5 Routes', () => {
    const wrapper = shallow(<App user={ defaultUser } />);

    expect(wrapper.find(Route).length).toEqual(5);
  });
});