import { connect } from 'react-redux';

import CreateUser from '../components/CreateUser';
import { createNewUserFetch } from '../actions/actions';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNewUserFetch: (firstname, lastname, location, experience, email, username, password) =>
      dispatch(createNewUserFetch(firstname, lastname, location, experience, email, username, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);