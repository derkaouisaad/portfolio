import React, { useState } from 'react'
import "./Navbar.css"
import logo from  "../Assets/logo.png"
import { Navbar, Nav, Container, Badge } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Navbare = () => {
  return (
    <div style={{ background: 'linear-gradient(180deg, #18001a, #000000 60%)' }}> {/* Apply inline style */}

    <div className='navbarr ' >
 <Navbar  expand="sm" data-bs-theme="dark">
    <Container>
    <Row>
      <Col>
      <div className='nav-logo '>

        <img className='me-4' src={logo} alt="logo"/>
        <Navbar.Brand href="#home"> saad.derkaoui04@gmail.com </Navbar.Brand>
      </div>
      </Col>
      <Col >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <div className="navbar-menu ">
        <Nav className="me-auto">
          <Nav.Link href="#Services" className="me-3" style={{color: 'white'}}> Services </Nav.Link>
          <Nav.Link href="#Works" className="me-3" style={{color: 'white'}}> Works </Nav.Link>
          <Nav.Link href="#Resume" className="me-3" style={{color: 'white'}}> Resume </Nav.Link>
          <Nav.Link href="#Skills" className="me-3" style={{color: 'white'}}> Skills </Nav.Link>
          <Nav.Link href="#Footer" className="me-3" style={{color: 'white'}}> Contact </Nav.Link>
        </Nav></div>
      </Navbar.Collapse>
      </Col>

      <Col >
      <div className="nav-Hire-Me ">
        <button>
        <Badge pill bg="light" text="dark"  className="fs-5 ">Hire me!</Badge>
        </button></div>
        </Col></Row>
<div>

</div>
        
    </Container> </Navbar> </div></div>



      
   
  )
}