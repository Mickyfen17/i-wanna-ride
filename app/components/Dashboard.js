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
    return signedIn ?
    <h3 className='dash-welcome'>{ firstname }'s DASHBOARD</h3> :
    <h3 className='dash-welcome'>Please Login</h3>;
  }
  addNewRide() {
    const { user: { signedIn } } = this.props;
    return (
      signedIn &&
      <Link to={ '/create-ride' }>
        <button className='add-ride-button'>New Ride</button>
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
    const userRides = this.displayUserRides();
    const userSignedIn = this.userSignedIn();
    const addNewRide = this.addNewRide();
    return (
      <div className='dashboard'>
        <Header
          className={ 'signed-in-header' }
          signedIn={ signedIn }
          handleSignOut={ userSignOut }
          history={ history }
        />
        { addNewRide }
        { userSignedIn }
        <table className='upcoming-rides'>
          <thead>
            <tr>
              <th
                colSpan={ 3 }
                className='table-main-header'
              >
                Upcoming Rides
              </th>
            </tr>
            <tr className='ride-row'>
              <th className='ride-row-header ride-details'>Details</th>
              <th className='ride-row-header'>Status</th>
              <th className='ride-row-header'>Delete</th>
            </tr>
          </thead>
          <tbody>
            { userRides }
          </tbody>
        </table>
      </div>
    );
  }
}