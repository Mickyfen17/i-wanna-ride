const intialState = {
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

const user = (state = intialState, action) => {
  switch (action.type) {
    case 'USER_SIGNED_IN' :
      return Object.assign({}, state, action.user, { signedIn: true });
    case 'USER_SIGNED_OUT' :
      return intialState;

    default:
      return state;
  }
};

export default user;