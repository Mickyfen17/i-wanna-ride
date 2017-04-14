import React, { Component } from 'react';
import Modal from 'react-modal';

export default class RideInfo extends Component {
  constructor() {
    super();
    this.state = {
      matchedRides: [],
      showMatchDetails: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.deleteRide = this.deleteRide.bind(this);
  }

  componentWillMount() {
    const { userID, date, time, experience, location, fetchMatchedRides } = this.props;
    fetchMatchedRides(userID, date, time, experience, location)
    .then(response =>
      response.json(),
    )
    .then(json =>
      this.setState({
        matchedRides: [...json.data],
      }),
    );
  }

  deleteRide() {
    const { userID, rideID } = this.props;
    fetch(`http://localhost:3000/api/users/${userID}/rides/${rideID}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id: userID, ride_id: rideID }),
    })
    .then(() => {
      this.fetchUpdatedRides();
    });
  }

  fetchUpdatedRides() {
    fetch(`http://localhost:3000/api/users/${this.props.userID}/rides`)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      this.props.fetchUserRides(json.data);
    });
  }

  toggleModal() {
    this.setState({
      showMatchDetails: !this.state.showMatchDetails,
    });
  }

  matchedRideDetails() {
    const { showMatchDetails, matchedRides } = this.state;
    return (
    <Modal
      isOpen={ showMatchDetails }
      contentLabel='matched-rider-info'
    >
      <article>
        <h1>Rider Infomation</h1>
        {
          matchedRides.map((ride, i) =>
            <div key={ i }>
              <h2>{ ride.firstname }</h2>
              <h2>{ ride.email }</h2>
            </div>,
          )
        }
        <button
          onClick={ this.toggleModal } >
          X
        </button>
      </article>
    </Modal>
    );
  }

  render() {
    const { matchedRides } = this.state;
    const { date, time, experience, location } = this.props;
    const userModal = this.matchedRideDetails();
    return (
      <tr className='ride-row'>
        { userModal }
        <td className='ride-col'>
          { `${date} - ${time} - ${experience} - ${location}` }
        </td>
        <td className='ride-col'>
          {
            matchedRides.length > 0 ?
            <button
              onClick={ this.toggleModal } >
              Ride Matched
            </button> :
            <p>No Matches</p>
          }
        </td>
        <td className='ride-col'>
          <button
            onClick={ this.deleteRide }
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}