import React, { useEffect, useRef } from 'react';
import './Alerts.css';
import data from '../../Data/Overview.json';
import { FaExclamationTriangle } from 'react-icons/fa'; 

const Alerts = () => {
  const alerts = data.rigs
    .filter(rig => rig.alert) 
    .map(rig => ({
      rig_id: rig.rig_id,
      message: rig.alert.message,
      timestamp: rig.alert.timestamp,
      type: rig.alert.type || 'warning',
    }))
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)); 

  const alertListRef = useRef(null);

  useEffect(() => {
    if (alertListRef.current) {
      alertListRef.current.scrollTop = alertListRef.current.scrollHeight;
    }
  }, [alerts]);

  const getAlertClass = (message) => {
    const lowerCaseMessage = message.toLowerCase();
    if (lowerCaseMessage.includes('low') || lowerCaseMessage.includes('not') || lowerCaseMessage.includes('operational')) {
      return 'alert-item red';
    }
    return 'alert-item yellow';
  };

  const timeAgo = (timestamp) => {
    const now = new Date();
    const time = new Date(timestamp);
    const diff = Math.abs(now - time) / 1000; 

    if (diff < 60) {
      return `${Math.floor(diff)} seconds ago`;
    } else if (diff < 3600) {
      return `${Math.floor(diff / 60)} minutes ago`;
    } else if (diff < 86400) {
      return `${Math.floor(diff / 3600)} hours ago`;
    } else {
      return `${Math.floor(diff / 86400)} days ago`;
    }
  };

  return (
    <div className="alert-card">
      <div className="alert-header"> 
      <h4 >Recent Alerts</h4>
      </div>
      <ul className="alert-list" ref={alertListRef} >
        {alerts.map((alert, index) => (
          <li key={index} className={getAlertClass(alert.message)}>
            <div className="alert-content">
              <div className="alert-icon-container">
              <FaExclamationTriangle className="alert-icon" />
              
              <p><strong>{alert.message} - {alert.rig_id}</strong></p>
              </div>
              <span className="alert-time">{timeAgo(alert.timestamp)}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Alerts;