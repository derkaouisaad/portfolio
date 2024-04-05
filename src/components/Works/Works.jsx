import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-cards'; // Import Swiper styles
import { Container, Row, Col, Button } from 'react-bootstrap';
import Project from "../Assets/Project.png";
import Portf from "../Assets/portf.png";
import './Works.css'; // Import your custom CSS file

export const Works = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      effect: "cards",
      grabCursor: true,
      initialSlide: 2,
      speed: 500,
      loop: true,
      rotate: true,
      mousewheel: {
        invert: false,
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

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
          <div className="swiper">
            <div className="swiper-wrapper">
              {/* Swiper slides */}
              <div className="swiper-slide">
                <img src={Project} alt="" className="swiper-image" />
                <div className="overlay">
                  <span>8.5</span>
                  <h2>CRUD-ECOMMERCE</h2>
                </div>
              </div>
              <div className="swiper-slide">
                <img src={Portf} alt="" className="swiper-image" />
                <div className="overlay">
                  <span>9.5</span>
                  <h2>PORTFOLIO PROJECT</h2>
                </div>
              </div>
            </div>
          </div>
        </Col>
        
      </Row>
      </div>
    </Container>
    </div>
  );
};
