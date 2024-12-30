import React, { Component } from 'react';
import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/react';
import { Button } from 'react-bootstrap';
import { exportToExcel } from '../../utils/export';
import data from '../../Data/Overview.json';
import './Main.css';

export default class Rtop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRig: null,
    };
  }

  componentDidMount() {
    const rigs = data.rigs;
    if (rigs.length > 0) {
      this.setState({ selectedRig: rigs[0] });
      this.props.onSelectRig(rigs[0]);
    }
  }

  handleSelect = (rig) => {
    this.setState({ selectedRig: rig });
    this.props.onSelectRig(rig);
  };

  handleExport = () => {
    const { selectedRig } = this.state;
    if (selectedRig) {
      exportToExcel([selectedRig]);
    }
  };

  render() {
    const { selectedRig } = this.state;
    const rigs = data.rigs;

    return (
      <div>
        <div className='topbar'>
          <div className='topbar-left'>
            <CDropdown dark>
              <CDropdownToggle color="secondary">
                {selectedRig ? selectedRig.rig_id : 'Select Rig ID'}
              </CDropdownToggle>
              <CDropdownMenu>
                {rigs.map((rig) => (
                  <CDropdownItem key={rig.rig_id} onClick={() => this.handleSelect(rig)}>
                    {rig.rig_id}
                  </CDropdownItem>
                ))}
              </CDropdownMenu>
            </CDropdown>
            <p>ICON</p>
          </div>
          <div>
            <Button variant="primary" onClick={this.handleExport}>Export Data</Button>
          </div>
        </div>
      </div>
    );
  }
}