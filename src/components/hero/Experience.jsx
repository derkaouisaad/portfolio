// Experience.js
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Experience.css';
const Experience = () => {
  return (
    <div className='experience'>
      <Row>
        <Col> 
          <div className="experience-item">
            <h1>MM</h1> 
            <p>Months of <br />  Experience</p> 
          </div>
        </Col>
        <Col> 
        <div className="experience-item">

            <h1>XX</h1> 
            <p>Project <br /> Completed</p> 
        </div>

        </Col>
        <Col> 
          <div className="experience-item">
            <h1>XX</h1> 
            <p>Happy <br /> Clients</p> 
          </div>
        </Col>
        <Col> 
          <div className="experience-item">
            <h1>MM</h1> 
            <p>Months of <br />  Experience</p> 
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Experience; // Export the Experience component as default
