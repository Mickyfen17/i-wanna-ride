import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

import Home from '../../app/components/Home';

describe('testing Home', () => {

  it('should render default page header and caption', () => {
    const wrapper = shallow( <Home /> )

    expect(wrapper.find('.home-page-header').text()).toEqual('I Wanna Ride')
    expect(wrapper.find('.home-page-caption').text()).toEqual('Sick of shredding the trails alone....')
  })
})