import userReducer from '../../reducers/userReducer';
import rootReducer from '../../reducers/index';

const initialState = {
  id: null,
  firstname: null,
  lastname: null,
  location: null,
  experience: null,
  username: null,
  email: null,
  password: null,
  signedIn: false,
};

const user = {
  id: 1,
  firstname: 'Mike',
  lastname: 'Fenwick',
  location: 'Denver',
  experience: 'Beginner',
  username: 'mikefen',
  email: 'abc@abc.com',
  password: 'password',
  signedIn: true,
};

describe('user reducer', () => {

  it('should return initial state by default', () => {
    expect(userReducer(undefined, {})).toEqual(initialState)
  });

  it('should return a user object when action is USER_SIGNED_IN', () => {
    expect(userReducer(undefined, {
      type: 'USER_SIGNED_IN',
      user,
    })).toEqual(user);
  });

  it('should return to the initialState when action is USER_SIGNED_OUT', () => {
    const userState = rootReducer(undefined, {
      type: 'USER_SIGNED_OUT',
    });
    expect(userState.user).toEqual(initialState);
  });
});