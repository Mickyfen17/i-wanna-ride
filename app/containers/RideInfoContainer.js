import { connect } from 'react-redux';

import RideInfo from '../components/RideInfo';
import { fetchMatchedRides, fetchAllUserRides, deleteRide } from '../actions/actions';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMatchedRides: (userID, date, time, experience, location) =>
      dispatch(fetchMatchedRides(userID, date, time, experience, location)),
    fetchAllUserRides: userID => dispatch(fetchAllUserRides(userID)),
    deleteRideCall: (userID, rideID) => dispatch(deleteRide(userID, rideID)),
  };
};

export default connect(null, mapDispatchToProps)(RideInfo);