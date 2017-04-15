import { connect } from 'react-redux';

import CreateRide from '../components/CreateRide';
import { userSignOut, addNewRide } from '../actions/actions';


const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    userSignOut: () => dispatch(userSignOut()),
    addNewRide: (id, firstname, email, location, latitude, longitude, experience, ridedate, ridetime) =>
      dispatch(addNewRide(id, firstname, email, location, latitude, longitude, experience, ridedate, ridetime)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateRide);