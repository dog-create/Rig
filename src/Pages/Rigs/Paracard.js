import React, { Component } from 'react';
import './Main.css';

const getLatestDepth = (drillingDepthArray) => {
  if (!drillingDepthArray || drillingDepthArray.length === 0) return 0;
  const latestDepth = drillingDepthArray.reduce((latest, current) => {
    return new Date(current.timestamp) > new Date(latest.timestamp) ? current : latest;
  });
  return latestDepth.depth;
};

export default class Paracard extends Component {
  render() {
    const { rig } = this.props;
    if (!rig) {
      return <div></div>;
    }
    return (
      <div className='paracard-row'>
        <div className='paracard-col'>
          <div className='paracard'>
            <div className='card-body'>
              <div className='card-title'>PTO Status</div>
              <div className='card-text' >
                {rig.pto_status ? 'Active' : 'Inactive'} 
                </div>
            </div>
          </div>
        </div>
        <div className='paracard-col'>
          <div className='paracard'>
            <div className='card-body'>
              <div className='card-title'>Fuel Level</div>
              <div className='card-text'>{rig.fuel_level}%</div>
            </div>
          </div>
        </div>
        <div className='paracard-col'>
          <div className='paracard'>
            <div className='card-body'>
              <div className='card-title'>Depth</div>
              <div className='card-text'>{new Intl.NumberFormat().format(getLatestDepth(rig.drilling_depth))}m</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}