import { connect } from 'react-redux';

import Login from '../components/Login';
import { userSignIn, signInFetch } from '../actions/actions';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    userSignIn: user => dispatch(userSignIn(user)),
    signInFetch: (username, password) =>
      dispatch(signInFetch(username, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
