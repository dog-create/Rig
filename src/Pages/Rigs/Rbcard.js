import React, { Component } from 'react';
import './Main.css';
import LinearProgress from '@mui/material/LinearProgress';

export default class Rbcard extends Component {
  render() {
    const { fuelLevel, engineTemperature } = this.props;

    return (
      <div>
        <div className='rbcard'>
          <p className='Title'>Current Parameters</p>
          <div className='inner-rbcard'>
            <div>
              <p className='sub-2'>Fuel Level</p>
              <LinearProgress
                variant="determinate"
                value={fuelLevel}
                sx={{
                  height: 10, 
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: fuelLevel < 40 ? 'red' : 'green', 
                  },
                }}
              />
              <p className='sub-2'>{fuelLevel}% Remaining</p>
            </div>
            <div>
              <p className='sub-2'>Engine Temperature</p>
              <LinearProgress
                variant="determinate"
                value={engineTemperature}
                sx={{
                  height: 10, 
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: engineTemperature > 150 ? 'red' : 'green', 
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}