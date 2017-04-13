import { connect } from 'react-redux';

import RideInfo from '../components/RideInfo';
import { fetchMatchedRides } from '../actions/actions';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMatchedRides: (userID, date, time, experience, location) =>
      dispatch(fetchMatchedRides(userID, date, time, experience, location)),
  };
};

export default connect(null, mapDispatchToProps)(RideInfo);