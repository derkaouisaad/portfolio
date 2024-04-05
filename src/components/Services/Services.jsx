import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col,Button } from 'react-bootstrap';
import "./Services.css"
import Project from "../Assets/Project.png"
function Example() {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  return (
    < >
    <div  id="Services">
                 <center>  <h1 className='h1-SS'>My Quality Services</h1> <br />
                            <p className='p-SS'>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
                  </center> 
      <div className="button-modal">
        <Container>
          <Button className="" onClick={() => setShowModal1(true)}>
            <Row> 
                <Col><div className="item"><h2>01</h2> <h1>FRONT-END</h1> </div></Col>
                <Col xs={12} sm={6}><p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis suscipit iste harum.
                </p></Col>
            </Row>
          </Button>
        </Container>
        <div className="modal-frame">
        <Modal show={showModal1} fullscreen="sm-down" size="xl"  onHide={() => setShowModal1(false)}>
          <Modal.Header closeButton>
            <Modal.Title>
                front-end crud e-commerce project
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <img className="modal-image" src={Project} alt="" /> <br />
          <Container>
            <Row>
         <Col>     
          <h2>SERVICES</h2>
          <h1>FRONT-END</h1>
          <p>As frontend developers, we specialize in crafting responsive and visually appealing websites that adapt seamlessly across different devices and screen sizes. Our expertise lies in creating intuitive user interfaces (UI) and ensuring an optimal user experience (UX) through careful design and development. We prioritize clean and maintainable code while leveraging the latest frontend technologies and frameworks to deliver modern and dynamic web solutions.</p>

<p>We also excel in optimizing website performance and compatibility, conducting thorough cross-browser testing to guarantee a consistent experience for all users. From frontend framework customization to mobile-friendly design, we handle every aspect of frontend development with precision and attention to detail. Our services extend beyond mere coding; we provide frontend consulting and strategy to help businesses align their digital presence with their goals and target audience.</p>

<p>Additionally, we offer ongoing frontend maintenance and support to keep your website running smoothly post-launch. Whether it's integrating with backend systems, implementing accessibility standards, or enhancing SEO optimization, our team is dedicated to delivering high-quality frontend solutions tailored to your specific requirements. With a focus on innovation and collaboration, we strive to exceed expectations and drive meaningful results for your business in the ever-evolving digital landscape.</p>

          </Col>   
            <Col md="auto">
            <div className="buttons">
            <div className="button-modals">
                <p></p>
            <center><h3>SKILLED LANGUAGES</h3></center>
            <Button className="btn-s" > HTML</Button>
            <Button className="btn-s" > CSS</Button>
            <Button className="btn-s" > REACT.JS</Button>
            <Button className="btn-s" > React Bootstrap</Button>
            </div>
            </div>
            </Col>
            </Row>
            </Container>
          </Modal.Body>
        </Modal></div>
      </div>
      <div className="button-modal">
        <Container>

{/* hna matnsach tbdel Set SHOW MODAL dir 2 wla 3 f kola model bach matle3 nefss resultat */}
          <Button className="" onClick={() => setShowModal1(true)}>
            <Row> 
                <Col><div className="item"><h2>02</h2> <h1>BACK-END</h1> </div></Col>
                <Col xs={12} sm={6}><p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis suscipit iste harum.
                </p></Col>
            </Row>
          </Button>
        </Container>
        <div className="modal-frame">
        <Modal show={showModal1} fullscreen="sm-down" size="xl"  onHide={() => setShowModal1(false)}>
          <Modal.Header closeButton>
            <Modal.Title>
                front-end crud e-commerce project
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <img className="modal-image" src={Project} alt="" /> <br />
          <Container>
            <Row>
         <Col>     
          <h2>SERVICES</h2>
          <h1>FRONT-END</h1>
          <p>As frontend developers, we specialize in crafting responsive and visually appealing websites that adapt seamlessly across different devices and screen sizes. Our expertise lies in creating intuitive user interfaces (UI) and ensuring an optimal user experience (UX) through careful design and development. We prioritize clean and maintainable code while leveraging the latest frontend technologies and frameworks to deliver modern and dynamic web solutions.</p>

<p>We also excel in optimizing website performance and compatibility, conducting thorough cross-browser testing to guarantee a consistent experience for all users. From frontend framework customization to mobile-friendly design, we handle every aspect of frontend development with precision and attention to detail. Our services extend beyond mere coding; we provide frontend consulting and strategy to help businesses align their digital presence with their goals and target audience.</p>

<p>Additionally, we offer ongoing frontend maintenance and support to keep your website running smoothly post-launch. Whether it's integrating with backend systems, implementing accessibility standards, or enhancing SEO optimization, our team is dedicated to delivering high-quality frontend solutions tailored to your specific requirements. With a focus on innovation and collaboration, we strive to exceed expectations and drive meaningful results for your business in the ever-evolving digital landscape.</p>

          </Col>   
            <Col md="auto">
            <div className="buttons">
            <div className="button-modals">
                <p></p>
            <center><h3>SKILLED LANGUAGES</h3></center>
            <Button className="btn-s" > HTML</Button>
            <Button className="btn-s" >CSS</Button>
            
            <Button className="btn-s" > REACT.JS</Button>
            <Button className="btn-s"> React Bootstrap</Button>
            </div>
            </div>
            </Col>
            </Row>
            </Container>
          </Modal.Body>
        </Modal></div>
      </div>
      <div className="button-modal">
        <Container>
          <Button className="" onClick={() => setShowModal1(true)}>
            <Row> 
                <Col><div className="item"><h2>03</h2> <h1>FULL-STACK</h1> </div></Col>
                <Col xs={12} sm={6}><p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis suscipit iste harum.
                </p></Col>
            </Row>
          </Button>
        </Container>
        <div className="modal-frame">
        <Modal show={showModal1} fullscreen="sm-down" size="xl"  onHide={() => setShowModal1(false)}>
          <Modal.Header closeButton>
            <Modal.Title>
                front-end crud e-commerce project
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <img className="modal-image" src={Project} alt="" /> <br />
          <Container>
            <Row>
         <Col>     
          <h2>SERVICES</h2>
          <h1>FRONT-END</h1>
          <p>As frontend developers, we specialize in crafting responsive and visually appealing websites that adapt seamlessly across different devices and screen sizes. Our expertise lies in creating intuitive user interfaces (UI) and ensuring an optimal user experience (UX) through careful design and development. We prioritize clean and maintainable code while leveraging the latest frontend technologies and frameworks to deliver modern and dynamic web solutions.</p>

<p>We also excel in optimizing website performance and compatibility, conducting thorough cross-browser testing to guarantee a consistent experience for all users. From frontend framework customization to mobile-friendly design, we handle every aspect of frontend development with precision and attention to detail. Our services extend beyond mere coding; we provide frontend consulting and strategy to help businesses align their digital presence with their goals and target audience.</p>

<p>Additionally, we offer ongoing frontend maintenance and support to keep your website running smoothly post-launch. Whether it's integrating with backend systems, implementing accessibility standards, or enhancing SEO optimization, our team is dedicated to delivering high-quality frontend solutions tailored to your specific requirements. With a focus on innovation and collaboration, we strive to exceed expectations and drive meaningful results for your business in the ever-evolving digital landscape.</p>

          </Col>   
            <Col md="auto">
            <div className="buttons">
            <div className="button-modals">
                <p></p>
            <center><h3>SKILLED LANGUAGES</h3></center>
            <Button className="btn-s" > HTML</Button>
            <Button className="btn-s" > CSS</Button>
            
            <Button className="btn-s" > REACT.JS</Button>
            <Button className="btn-s" > React Bootstrap</Button>
            </div>
            </div>
            </Col>
            </Row>
            </Container>
          </Modal.Body>
        </Modal></div>
      </div>



      {/* <div className="button-modal">
        <Container>
          <Button className="" onClick={() => setShowModal2(true)}>
            <Row> 
                <Col><div className="item"><h2>02</h2> <h1>Back-END</h1> </div></Col>
                <Col xs={12} sm={6}><p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis suscipit iste harum.</p></Col>
            </Row>
          </Button>
        </Container>
        <Modal show={showModal2} fullscreen="sm-down" onHide={() => setShowModal2(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>Back-END</Modal.Body>
        </Modal>
      </div>

      <div className="button-modal">
        <Container>
          <Button className="" onClick={() => setShowModal3(true)}>
            <Row> 
                <Col><div className="item"><h2>03</h2> <h1>Full-Stack</h1> </div></Col>
                <Col xs={12} sm={6}><p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis suscipit iste harum.</p></Col>
            </Row>
          </Button>
        </Container>
        <Modal show={showModal3} fullscreen="sm-down" onHide={() => setShowModal3(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>Full-Stackt</Modal.Body>
        </Modal> */}
      {/* </div> */}
      </div>
    </>
  );
}

export { Example };
