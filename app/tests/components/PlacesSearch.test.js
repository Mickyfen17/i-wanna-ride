import React from 'react';
import { shallow, mount } from 'enzyme';

import PlacesSearch from '../../components/PlacesSearch';

describe('testing PlacesSearch', () => {

  it('should accept props', () => {
    const wrapper = shallow(
      <PlacesSearch placeholder='Location' />,
    );
    expect(wrapper.props().placeholder).toEqual('Location')
  });
});