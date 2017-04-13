import React from 'react';

const RideInfo = ({ date, time, experience, location }) => {

  return (
    <tr className='ride-row'>
      <td className='ride-col'>
        { `${date} - ${time} - ${experience} - ${location}` }
      </td>
      <td className='ride-col'>
        No Match
      </td>
      <td className='ride-col'>
        <button>Delete</button>
      </td>
    </tr>
  );
};

export default RideInfo;