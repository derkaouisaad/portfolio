import React from 'react';
import 'swiper/css';
import 'swiper/css/effect-cards'; // Import Swiper styles
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Project from "../Assets/Project.png";
import Portf from "../Assets/portf.png";
import './Works.css'; // Import your custom CSS file

export const Works = () => {

  return (
    <div id="Works">
    <Container fluid className="works-container">
      <Row className="justify-content-center align-items-center">
        <Col xs={12} md={6} className="text-center mb-5">
          <h1 className='h1-SS'>My Recent Works</h1>
          <p className='p-SS'>We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.</p>
        </Col>
        </Row>
        <div className="test-it">
        <Row className="justify-content-md-center">
            <Col xs lg="5">

            <p>
                Welcome to our web development showcase! Join us for an immersive journey into the world of web development projects, where creativity meets innovation. Whether you're passionate about front-end design, back-end functionality, or full-stack solutions, we have a diverse array of projects to inspire and captivate you. From sleek user interfaces to robust backend architectures, our showcase offers something for everyone. Get ready to explore, learn, and be inspired by the incredible projects crafted by our talented developers. Save the date and prepare to be amazed!
            </p>
            <Button className="btn">Explore Projects</Button>
            </Col>
        <Col  xs={12} md={6} className="text-center">
          
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
      <div className="carousel-image-wrapper">

        <img
          className="d-block w-100"
          src={Project}
          alt="First slide"
        />
                  </div>

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="carousel-image-wrapper">
        <img
          className="d-block w-100"
          src={Project}
          alt="Second slide"
        />
          </div>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
        </Col>
        
      </Row>
      </div>
    </Container>
    </div>
  );
};
