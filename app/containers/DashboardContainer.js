import { connect } from 'react-redux';

import Dashboard from '../components/Dashboard';
import { userSignOut } from '../actions/actions';


const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    userSignOut: () => dispatch(userSignOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);