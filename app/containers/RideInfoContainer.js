import { connect } from 'react-redux';

import RideInfo from '../components/RideInfo';
import { fetchMatchedRides, fetchUserRides, deleteRide } from '../actions/actions';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMatchedRides: (userID, date, time, experience, location) =>
      dispatch(fetchMatchedRides(userID, date, time, experience, location)),
    fetchUserRides: rides => dispatch(fetchUserRides(rides)),
    deleteRideCall: (user_id, ride_id) => dispatch(deleteRide(user_id, ride_id)),
  };
};

export default connect(null, mapDispatchToProps)(RideInfo);