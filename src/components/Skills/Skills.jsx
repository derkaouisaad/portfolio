import React from 'react'
import "./Skills.css"
import { Container, Row, Col,Button } from 'react-bootstrap';
import HTML from "../Assets/HTML.png";
import PHP from "../Assets/php.png";
import CSS from "../Assets/css.png";
import JS from "../Assets/js.png";
import RB from "../Assets/react-boot.png";

import Icon from "../Assets/React-icon.png";

export const Skills = () => {
  return (
    <div className='Skills' id='Skills' >
        <center>
        <h1>My Skills</h1>
        <p>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
<Container>
    <Row>

    <Col > 
            <div className="hero-right-icon">
            <Button className="btn-ss" > 
            <img src={HTML} alt="" />
              <h2>70%</h2>
            </Button>
            </div>
            
    </Col>
    <Col > 
            <div className="hero-right-icon">
            <Button className="btn-ss" > 
            <img src={CSS} alt="" />
              <h2>70%</h2>
            </Button>
            </div>
            
    </Col>
    <Col > 
            <div className="hero-right-icon">
            <Button className="btn-ss" > 
            <img src={JS} alt="" />
              <h2>70%</h2>
            </Button>
            </div>
            
    </Col>
    <Col > 
            <div className="hero-right-icon">
            <Button className="btn-ss" > 
            <img src={PHP} alt="" />
              <h2>70%</h2>
            </Button>
            </div>
            
    </Col>
    <Col > 
            <div className="hero-right-icon">
            <Button className="btn-ss" > 
            <img src={RB} alt="" />
              <h2>70%</h2>
            </Button>
            </div>
            
    </Col>
    <Col > 
            <div className="hero-right-icon">
            <Button className="btn-ss" > 
            <img src={Icon} alt="" />
              <h2>70%</h2>
            </Button>
            </div>
            
    </Col>
    </Row>
</Container>

</center>
    </div>
  )
}
