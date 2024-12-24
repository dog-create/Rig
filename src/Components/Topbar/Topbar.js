import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './Topbar.css';

export default class Topbar extends Component {
  render() {
    return (
      <div>
         <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand >LogoIcon</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">

        </Navbar.Collapse>
        <Navbar.Toggle />
        
          <Navbar.Text>
             AccountIcon  
          </Navbar.Text>
      </Container>
    </Navbar>   
      </div>
    );
  }
}