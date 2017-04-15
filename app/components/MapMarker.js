import React, { Component } from 'react';

export default class MapMarker extends Component {

  render() {
    const { location, lat, lng } = this.props;
    return (
      <a
        href={`https://www.google.com/maps/place/${location}/@${lat},${lng},15z/`}
        target='_blank'
        >
        <div
          className='map-marker'
        >
        </div>
      </a>
    );
  }
}