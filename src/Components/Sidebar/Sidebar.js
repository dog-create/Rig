import React from 'react';
import { Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import RigIcon from '../../Assets/rig.svg';
import AnalyticsIcon from '../../Assets/analytics.svg';
import SettingsIcon from '../../Assets/settings.svg';
import RmIcon from '../../Assets/rma.svg';
import HomeIcon from '../../Assets/home.svg';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();

  return (
    <Nav className="sidebar">
      <Nav.Link href="/Overview" className={`nav-link-custom ${location.pathname === '/Overview' ? 'active' : ''}`}>
        <div className='d-flex gap-2'>
          <img src={HomeIcon} alt='home' className='Icon' />
          <div className='text-white'>Rig Overview</div>
        </div>
      </Nav.Link>
      <Nav.Link href="/Rigs" className={`nav-link-custom ${location.pathname === '/Rigs' ? 'active' : ''}`}>
        <div className='d-flex gap-2'>
          <img src={RigIcon} alt='dashboard' className='Icon' />
          <div className='text-white'>Rigs</div>
        </div>
      </Nav.Link>
      <Nav.Link href="/Analytics" className={`nav-link-custom ${location.pathname === '/Analytics' ? 'active' : ''}`}>
        <div className='d-flex gap-2'>
          <img src={AnalyticsIcon} alt='analytics' className='Icon' />
          <div className='text-white'>Analytics</div>
        </div>
      </Nav.Link>
      <Nav.Link href="/RigManagement" className={`nav-link-custom ${location.pathname === '/RigManagement' ? 'active' : ''}`}>
        <div className='d-flex gap-1'>
          <img src={RmIcon} alt='rma' className='Icon' />
          <div className='text-white'>Rig Management</div>
        </div>
      </Nav.Link>
      <Nav.Link href="/Settings" className={`nav-link-custom ${location.pathname === '/Settings' ? 'active' : ''}`}>
        <div className='d-flex gap-2'>
          <img src={SettingsIcon} alt='settings' className='Icon' />
          <div className='text-white'>Settings</div>
        </div>
      </Nav.Link>
    </Nav>
  );
};

export default Sidebar;