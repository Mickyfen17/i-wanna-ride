import React from 'react';
import { shallow, mount } from 'enzyme';

import MapMarker from '../../components/MapMarker';

describe('testing MapMarker', () => {

  it('should accept props', () => {
    const wrapper = mount(
      <MapMarker
        location='Denver,CO'
        lat='39.7392358'
        lng='-104.990251'
      />,
    );
    expect(wrapper.props().location).toEqual('Denver,CO')
    expect(wrapper.props().lat).toEqual('39.7392358')
    expect(wrapper.props().lng).toEqual('-104.990251')
  });

  it('should pass props to MapMarker element', () => {
    const wrapper = mount(
      <MapMarker
        location='Denver,CO'
        lat='39.7392358'
        lng='-104.990251'
      />,
    );

    expect(wrapper.html())
    .toEqual(
      '<a href="https://www.google.com/maps/place/Denver,CO/@39.7392358,-104.990251,15z/" target="_blank"><div class="map-marker"></div></a>',
    );
  });
});