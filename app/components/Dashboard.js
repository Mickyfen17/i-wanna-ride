import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import RideInfoContainer from '../containers/RideInfoContainer';


export default class Dashboard extends Component {

  componentWillMount() {
    fetch(`http://localhost:3000/api/users/${this.props.user.id}/rides`)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      this.props.fetchUserRides(json.data);
    });
  }
  userSignedIn() {
    const { user: { firstname, signedIn } } = this.props;
    return signedIn ? <h3>Welcome back, { firstname }</h3> : <h3>Please Login</h3>;
  }
  addNewRide() {
    const { user: { signedIn } } = this.props;
    return (
      signedIn &&
      <Link to={ '/create-ride' }>
        <button>Add new ride</button>
      </Link>
    );
  }

  displayUserRides() {
    const { user: { signedIn } } = this.props;
    if(signedIn) {
      return this.props.rides.map((ride) => {
        const { id, user_id, ridedate, ridetime, experience, location } = ride;
        return (
          <RideInfoContainer
            className='each-ride'
            key={ id }
            userID={ user_id }
            rideID={ id }
            date={ ridedate }
            time={ ridetime }
            experience={ experience }
            location={ location }
          />
        );
      });
    }
  }
  render() {
    const { user: { signedIn }, userSignOut, history } = this.props;
    return (
      <div className='dashboard'>
        <Header
          className={ 'signed-in-header' }
          signedIn={ signedIn }
          handleSignOut={ userSignOut }
          history={ history }
        />
        <h1>DASHBOARD</h1>
        { this.userSignedIn() }
        { this.addNewRide() }
        <table className='upcoming-rides'>
          <thead>
            <tr className='ride-row'>
              <th className='table-main-header'>Upcoming Rides</th>
            </tr>
            <tr className='ride-row'>
              <th className='ride-row-header'>Detalis</th>
              <th className='ride-row-header'>Status</th>
              <th className='ride-row-header'>Delete</th>
            </tr>
          </thead>
          <tbody>
            { this.displayUserRides() }
          </tbody>
        </table>
      </div>
    );
  }
}