import { connect } from 'react-redux';

import CreateRide from '../components/CreateRide';
import { userSignOut } from '../actions/actions';


const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    userSignOut: () => dispatch(userSignOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateRide);