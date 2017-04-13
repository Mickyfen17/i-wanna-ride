import React, { Component } from 'react';

export default class RideInfo extends Component {
  constructor() {
    super()
    this.state = {
      matchedRides: [],
    }
  }

  componentWillMount() {
    const { userID, date, time, experience, location } = this.props;
    fetch('http://localhost:3000/api/matchrides', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userID, date, time, experience, location }),
    })
    .then(response =>
      response.json(),
    )
    .then(json =>
      this.setState({
        matchedRides: [...json.data],
      }),
    );
  }

  render() {
    const { matchedRides } = this.state;
    const { date, time, experience, location } = this.props;
    return (
      <tr className='ride-row'>
        <td className='ride-col'>
          { `${date} - ${time} - ${experience} - ${location}` }
        </td>
        <td className='ride-col'>
          {
            matchedRides.length > 0 ?
            <p>Ride Matched</p> :
            <p>No Matches</p>
          }
        </td>
        <td className='ride-col'>
          <button>Delete</button>
        </td>
      </tr>
    );
  }
}