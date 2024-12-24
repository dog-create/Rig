import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './Topbar.css';

export default class Topbar extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Brand > Logo </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              AccountIcon
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}