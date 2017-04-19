import React from 'react';
import { shallow, mount } from 'enzyme';

import Input from '../../components/Input';

describe('testing Input', () => {

  it('should accept props', () => {
    const wrapper = shallow(
      <Input
        className='test-class'
        placeholder='test-placeholder'
        type='test-type'
        value='test-value'
        name='test-name'
        onChange={ () => {} }
      />,
    );

    expect(wrapper.props().className).toEqual('test-class')
    expect(wrapper.props().name).toEqual('test-name')
    expect(wrapper.props().placeholder).toEqual('test-placeholder')
    expect(wrapper.props().type).toEqual('test-type')
    expect(wrapper.props().value).toEqual('test-value')
  });

  it('should pass props to input element', () => {
    const wrapper = mount(
      <Input
        className='test-class'
        placeholder='test-placeholder'
        type='test-type'
        value='test-value'
        name='test-name'
        onChange={ () => {} }
      />,
    );

    expect(wrapper.html())
    .toEqual('<input type="test-type" class="test-class" placeholder="test-placeholder" value="test-value" name="test-name">')
  });
});