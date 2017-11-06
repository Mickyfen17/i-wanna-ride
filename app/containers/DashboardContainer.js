import { connect } from 'react-redux';

import Dashboard from '../components/Dashboard';
import { userSignOut, fetchAllUserRides } from '../actions/actions';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    userSignOut: () => dispatch(userSignOut()),
    fetchAllUserRides: userID => dispatch(fetchAllUserRides(userID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
