import React from 'react';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock';
import { BrowserRouter } from 'react-router-dom'
import CreateRide from '../../app/components/CreateRide';
import Input from '../../app/components/Input';


describe('testing CreateRide', () => {
  const defaultUser = {
    signedIn: false,
  };
  const singedInMockUser = {
    username: 'mikefen',
    password: 'password',
    signedIn: true,
  };

  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  });

  it('should have a default state', () => {
    const wrapper = shallow( <CreateRide user={ defaultUser } /> )

    expect(wrapper.state())
    .toEqual({ 'error': '', 'experience': 'Beginner', 'latitude': '', 'location': '', 'longitude': '', 'ridedate': '', 'ridetime': 'Morning'})
  })

  it('be able to add text to inputs and update state', () => {
    const wrapper = mount(
      <BrowserRouter>
        <CreateRide user={ defaultUser } />
      </BrowserRouter>,
    );

    const createRideWrapper = wrapper.find(CreateRide);

    const locationInput = wrapper.find('.geosuggest__input');
    const experienceInput = wrapper.find('select[name="experience"]');
    const dateInput = wrapper.find('input[name="ridedate"]');
    const timeInput = wrapper.find('select[name="ridetime"]');

    dateInput.simulate('change', {
      target: {
        name: 'ridedate',
        value: '01/01/2018',
      },
    });


    expect(createRideWrapper.node.state)
    .toEqual({ 'error': '', 'experience': 'Beginner', 'latitude': '', 'location': '', 'longitude': '', 'ridedate': '01/01/2018', 'ridetime': 'Morning' })
  });

});