import React from 'react';

const RideInfo = ({ userID, date, time, experience, location }) => {

  const matchRides = () => {
    fetch('http://localhost:3000/api/matchrides', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userID, date, time, experience, location }),
    })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
    });
  };

  return (
    <tr className='ride-row'>
      <td className='ride-col'>
        { `${date} - ${time} - ${experience} - ${location}` }
      </td>
      <td className='ride-col'>
        No Match
        { matchRides() }
      </td>
      <td className='ride-col'>
        <button>Delete</button>
      </td>
    </tr>
  );
};

export default RideInfo;