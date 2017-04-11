import { connect } from 'react-redux';

import Login from '../components/Login';
import { userSignIn } from '../actions/actions';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    userSignIn: user => dispatch(userSignIn(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);