import React, { Component } from 'react';
import Modal from 'react-modal';
import GoogleMapReact from 'google-map-react';

import MapMarker from './MapMarker';

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
    const {
      userID,
      date,
      time,
      experience,
      location,
      fetchMatchedRides,
    } = this.props;
    fetchMatchedRides(userID, date, time, experience, location).then(json =>
      this.setState({
        matchedRides: [...json.data],
      }),
    );
  }

  deleteRide() {
    const { userID, rideID, deleteRideCall } = this.props;
    deleteRideCall(userID, rideID).then(() => {
      this.fetchUpdatedRides();
    });
  }

  fetchUpdatedRides() {
    this.props.fetchAllUserRides(this.props.userID);
  }

  createMapOptions(maps) {
    return {
      zoomControlOptions: {
        position: maps.ControlPosition.RIGHT_BOTTOM,
        style: maps.ZoomControlStyle.SMALL,
      },
      mapTypeControlOptions: {
        position: maps.ControlPosition.TOP_RIGHT,
      },
      mapTypeControl: true,
    };
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
        className="ride-match-modal"
        isOpen={showMatchDetails}
        contentLabel="matched-rider-info"
      >
        <article className="ride-info-wrapper">
          <h1 className="modal-header">Matched Riders</h1>
          {matchedRides.map((ride, i) => (
            <div key={i} className="ride-location">
              <h2 className="modal-name">{ride.firstname}</h2>
              <a href={`mailto:${ride.email}`} className="modal-email">
                {ride.email}
              </a>
              <h2 className="modal-location">{ride.location}</h2>
              <GoogleMapReact
                center={[
                  parseFloat(ride.latitude, 10),
                  parseFloat(ride.longitude, 10),
                ]}
                zoom={15}
                options={this.createMapOptions}
              >
                <MapMarker
                  lat={parseFloat(ride.latitude, 10)}
                  lng={parseFloat(ride.longitude, 10)}
                  location={ride.location}
                />
              </GoogleMapReact>
            </div>
          ))}
          <button className="close-modal-btn" onClick={this.toggleModal}>
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
      <tr className="ride-row">
        {userModal}
        <td className="ride-col ride-details">
          <p>{`${date} - ${time}`}</p>
          <p>
            <span>Level - </span>
            {experience}
          </p>
          <p>
            <span>Location - </span>
            {location}
          </p>
        </td>
        <td className="ride-col">
          {matchedRides.length > 0 ? (
            <button className="ride-match-button" onClick={this.toggleModal}>
              Match Found
            </button>
          ) : (
            <p>No Match</p>
          )}
        </td>
        <td className="ride-col">
          <button
            className="delete-ride-button"
            onClick={this.deleteRide}
            alt="Delete Ride"
          />
        </td>
      </tr>
    );
  }
}
