import React from 'react'
import "./Resume.css"
import { Container, Row, Col,Button } from 'react-bootstrap';


export const Resume = () => {
  return (
    <div className='Resume' id="Resume">
<Container>
    <Row >
        <Col sm={6}>    
        <Row>
        <center>
        <h1>
             My Experience 
        </h1>
        
        <Col>

         <Button className="btn-s" >
            <h3> 2024/04 - 2024/05</h3>
            <h2>programming WEB</h2>
            <p>Ministère De l'industrie et du commerce</p>
            
         </Button>
        </Col>
</center>
        </Row>
        </Col>

        <Col sm={6}>    
        <Row>
        <center>
        <h1> 
             My Education</h1>
        
        <Col>
        <Button className="btn-s" >
            <h3> 2022 - 2024</h3>
            <h2>Diploma of Education</h2>
            <p>Ofppt - hay chmaaou</p>
            
         </Button> 
         <Button className="btn-s" >
            <h3> 2021 - 2022</h3>
            <h2>High School Diploma</h2>
            <p>Groupe Scolaire Al AMANA  </p>
            
         </Button>
        </Col>
        </center>
        </Row>
        </Col>
    </Row>
</Container>

          </div>
  )
}
