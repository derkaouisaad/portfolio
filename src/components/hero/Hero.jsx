import React from 'react';
import { Container, Row, Col, Badge, Stack } from 'react-bootstrap';
import './hero.css';
import Me from "../Assets/me.png";
import Experience from "./Experience";
import CV from "../Assets/CV.pdf";
import insta from "../Assets/insta.png"
import Linkedin from "../Assets/linkedin.png"

export const Hero = () => {
  return (
    <div > 
      <Container>
        <Row>
          <Col xs={{ order: 'last' }} sm={{ order: 'first' }}> {/* Move this column to the end on extra small screens and beginning on small screens */}
            <div className='hero'>
              <div className="hero-left col">
                <div>
                  <h1>I am Saad</h1> 
                  <h2>Web Developer</h2> 
                  <p>I break down complex user experience problems to <br /> create integrity-focused solutions that connect <br /> billions of people</p> 
                </div>
                <div className="hero-latest-btn">
                  <Stack direction="horizontal" gap={2}>
                  <button><a href={CV}>DOWNLOAD CV</a></button>
                {/* <a href="https://www.instagram.com/derkaouisaad1/">  <img src={insta} alt="" /></a> */}
                <a href="https://www.linkedin.com/in/saad-derkaoui-689905254/">  <img src={Linkedin} alt="" /></a>
                  </Stack>

                </div>
              </div>
            </div>
          </Col>
          <Col xs={{ order: 'first' }} sm={{ order: 'last' }}> 
            <div className="hero-right">
              <img src={Me} alt="" />
            </div>
            
          </Col>
        </Row>
        <Experience /> 
      </Container>
    </div>
  );
};
