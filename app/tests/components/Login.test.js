import React from 'react';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock';
import { BrowserRouter } from 'react-router-dom'
import Login from '../../components/Login';
import Input from '../../components/Input';


describe('testing Login', () => {
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
    const wrapper = shallow( <Login user={ defaultUser } /> )

    expect(wrapper.state())
    .toEqual({ 'username': '', 'error': '', 'password': '' })
  })

  it('be able to add text to inputs and update state', () => {
    const wrapper = mount(
      <BrowserRouter>
        <Login user={ defaultUser } />
      </BrowserRouter>,
    );

    const loginWrapper = wrapper.find(Login);
    const usernameInput = wrapper.find('input[name="username"]');
    const passwordInput = wrapper.find('input[name="password"]');

    usernameInput.simulate('change', {
      target: {
        name: 'username',
        value: 'mikefen',
      },
    });
    passwordInput.simulate('change', {
      target: {
        name: 'password',
        value: 'password',
      },
    });

    expect(loginWrapper.node.state).toEqual({ username: 'mikefen', password: 'password', error: '' });
  });

  it('should display error on submit if inputs are empty', () => {
    const wrapper = shallow( <Login user={ defaultUser } /> );
    const submitBtn = wrapper.find('button');

    submitBtn.simulate('click');

    const displayedError = wrapper.find('h4').last();

    expect(wrapper.state().error).toEqual('Please fill out all input fields');
    expect(displayedError.length).toEqual(1);
    expect(displayedError.text()).toEqual('Please fill out all input fields');
  });

  it('should display error when login fails', async (done) => {
    fetchMock.post('http://localhost:3000/api/users', {
      status: 500,
      body: {},
    });
    const wrapper = mount(
      <BrowserRouter>
        <Login user={ defaultUser } />
      </BrowserRouter>,
    );

    const usernameInput = wrapper.find('input[name="username"]');
    const submitBtn = wrapper.find('button');

    usernameInput.simulate('change', {
      target: {
        name: 'username',
        value: 'Mike',
      },
    });

    console.log(usernameInput.debug());
    console.log(submitBtn.debug());
    console.log(wrapper.debug());

    await wrapper.update();

    const displayedError = wrapper.find('h4').last();

    expect(displayedError.length).toEqual(1)
    expect(displayedError.text()).toEqual('Email or password is incorrect')

    done();
  })
});