import { connect } from 'react-redux';

import RideInfo from '../components/RideInfo';
import { fetchMatchedRides, fetchUserRides } from '../actions/actions';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMatchedRides: (userID, date, time, experience, location) =>
      dispatch(fetchMatchedRides(userID, date, time, experience, location)),
    fetchUserRides: rides => dispatch(fetchUserRides(rides)),
  };
};

export default connect(null, mapDispatchToProps)(RideInfo);