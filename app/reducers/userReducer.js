const intialState = {
  id: null,
  first_name: null,
  last_name: null,
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

    default:
      return state;
  }
};

export default user;