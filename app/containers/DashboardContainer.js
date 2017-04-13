import { connect } from 'react-redux';

import Dashboard from '../components/Dashboard';
import { userSignOut, fetchUserRides } from '../actions/actions';


const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    userSignOut: () => dispatch(userSignOut()),
    fetchUserRides: rides => dispatch(fetchUserRides(rides)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);