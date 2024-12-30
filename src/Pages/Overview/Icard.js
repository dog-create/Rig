import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import data from '../../Data/Overview.json';
import RigIcon from '../../Assets/rig.svg';
import ActiveIcon from '../../Assets/active.svg';
import AlertIcon from '../../Assets/warning.svg';
import moveIcon from '../../Assets/inmovement.svg';
import './Icard.css';

const Icard = () => {
  const { total_rigs, total_pto_status, alerts_total,  inmovement_rigs} = data.summary;

  return (
    <Row className='text-left mt-2'>
      <Col>
        <Card className='bg-dark text-white '>
          <Card.Body>
            <Card.Title className='text-white  '>
              <div className='d-flex justify-content-between gap-5'> 
                <div className='text-white'>Total Rigs</div>
                <div className='text-white'>
                  <img src={RigIcon} alt='rig' className='ICON' />
                </div>
              </div>
            </Card.Title>
            <Card.Text className='text-white'>{total_rigs}</Card.Text>
            <Card.Text className='text-white'>Active Rigs</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className='bg-dark text-white '>
          <Card.Body>
            <Card.Title className='text-white d-flex justify-content-between gap-3'>
              <div className='text-white '>Active Operations</div>
              <div className='text-white'>
                <img src={ActiveIcon} alt='active' className='ICON' />
              </div>
            </Card.Title>
            <Card.Text className='text-white'>{total_pto_status}</Card.Text>
            <Card.Text className='text-white'>Currently Drilling</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className='bg-dark text-white '>
          <Card.Body>
            <Card.Title className='text-white d-flex justify-content-between gap-5'>
              <div className='text-white'>Alerts</div>
              <div className='text-white'>
                <img src={AlertIcon} alt='alert' className='ICON' />
              </div>
            </Card.Title>
            <Card.Text className='text-white'>{alerts_total}</Card.Text>
            <Card.Text className='text-white'>Critical Issues</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className='bg-dark text-white '>
          <Card.Body>
            <Card.Title className='text-white d-flex justify-content-between gap-5'>
              <div className='text-white float-left'>Inmovement</div>
              <div className='text-white '>
                <img src={moveIcon} alt='move' className='ICON' />
              </div>
            </Card.Title>
            <Card.Text className='text-white'>{inmovement_rigs}</Card.Text>
            <Card.Text className='text-white'>Across All Rigs</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Icard;