import React, { Component } from 'react';
import MapComponent from '../../Components/Map/Map';
import './Main.css';

const formatCoordinates = (lat, lon) => {
  const formatCoord = (coord, pos, neg) => {
    const absolute = Math.abs(coord);
    const degrees = Math.floor(absolute);
    const minutesNotTruncated = (absolute - degrees) * 60;
    const minutes = Math.floor(minutesNotTruncated);
    const seconds = Math.floor((minutesNotTruncated - minutes) * 60);
    const direction = coord >= 0 ? pos : neg;
    return `${degrees}°${minutes}'${seconds}" ${direction}`;
  };

  const latitude = formatCoord(lat, 'N', 'S');
  const longitude = formatCoord(lon, 'E', 'W');
  return { latitude, longitude };
};

export default class Rt extends Component {
  render() {
    const { latitude, longitude, locationname } = this.props;
    const formattedCoords = formatCoordinates(latitude, longitude);

    return (
      <div className='rt'>
        <div className='rt-top'>
          <text className="Title">Location</text>
        </div>
        <div className='rt-mid'>
          <MapComponent latitude={latitude} longitude={longitude} />
        </div>
        <div className='rt-bot'>
          <div>
            <h1 className='Subheading'>Current Location:</h1>
            <text className='Title'>{locationname}</text>
            <h1 className='Subheading'>Coordinates:</h1>
            <text className='Title'>{formattedCoords.latitude},{formattedCoords.longitude}</text>
          </div>
        </div>
      </div>
    );
  }
}