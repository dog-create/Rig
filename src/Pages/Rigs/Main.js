import React, { Component } from 'react';
import './Main.css';
import Top from './Rtop';
import Paracard from './Paracard';
import Chart from './Chart';
import Rbcard from './Rbcard';
import Rt from './Rt';
import Rb from './Rb';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRig: null,
    };
  }

  handleSelectRig = (rig) => {
    this.setState({ selectedRig: rig });
  };

  render() {
    const { selectedRig } = this.state;

    return (
      <div className='mainlayout'>
        <Top className='topbar' onSelectRig={this.handleSelectRig} />
        <div className='content'>
          <div className='mainlayout__left'>
            <div className='mainlayout__left__top'>
              {selectedRig && <Paracard rig={selectedRig} />}
            </div>
            <div className='mainlayout__left__bottom'>
              <div className='mainlayout__left__bottom__search'>
                <Chart />
              </div>
              <div className='mainlayout__left__bottom__filter'>
                {selectedRig && (<Rbcard 
                 fuelLevel={selectedRig.fuel_level}
                 engineTemperature={selectedRig.engine_temperature}
                />
                )}
              </div>
            </div>
          </div>
          <div className='mainlayout__right'>
            <div className='mainlayout__right__top'>
              {selectedRig && (
                <Rt
                  latitude={selectedRig.location.coordinates.latitude}
                  longitude={selectedRig.location.coordinates.longitude}
                  locationname={selectedRig.location.name}
                />
              )}
            </div>
            <div className='mainlayout__right__bottom'>
              <div className='mainlayout__right__bottom__search'>
              {selectedRig && <Rb selectedRig={selectedRig} />}
              </div>
              <div className='mainlayout__right__bottom__filter'></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}