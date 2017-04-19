import React from 'react';
import { shallow, mount } from 'enzyme';
import { Route } from 'react-router-dom';


import App from '../../components/App';

describe('testing App', () => {

  it('should contain 5 Routes', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Route).length).toEqual(5);
  });
});