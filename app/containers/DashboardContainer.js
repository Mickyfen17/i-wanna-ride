import { connect } from 'react-redux';

import Dashboard from '../components/Dashboard';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return dispatch;
};

export default connect(mapStateToProps, null)(Dashboard);