import React from 'react';
import logo from "../Assets/logo.png"
import './Footer.css';
import { Navbar, Nav, Container,  } from 'react-bootstrap'

export const Footer = () => {
    return (
        <div className='footer' id='Footer'>
            <footer className="footer-section">
                <div className="container">
                    <div className="footer-cta pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="cta-text">
                                        <h4>Find us</h4>
                                        <span> Rabat-Salé-Kénitra</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <div className="cta-text">
                                        <h4>Call us</h4>
                                        <span>+212624533350</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="far fa-envelope-open"></i>
                                    <div className="cta-text">
                                        <h4>Mail us</h4>
                                        <span>saad.derkaoui04@gmail.com </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-logo">
                                        <a href="#"><img src={logo} className="img-fluid" alt="logo" /></a>
                                    </div>
                                    <div className="footer-text">
                                        <p>As frontend developers, we specialize in crafting responsive and visually appealing websites that adapt seamlessly across different devices and screen sizes. Our expertise lies in creating intuitive user interfaces (UI) and ensuring an optimal user experience (UX) through careful design and development. We prioritize clean and maintainable code while leveraging the latest frontend technologies and frameworks to deliver modern and dynamic web solutions.</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Useful Links</h3>
                                    </div>  
                                    <ul>
                                        <li><Nav.Link href="#Services" className="me-3" style={{color: 'white'}}> Services </Nav.Link></li>
                                        <li><Nav.Link href="#Works" className="me-3" style={{color: 'white'}}> Works </Nav.Link></li>
                                        <li><Nav.Link href="#Resume" className="me-3" style={{color: 'white'}}> Resume </Nav.Link></li>
                                        <li><Nav.Link href="#Skills" className="me-3" style={{color: 'white'}}> Skills </Nav.Link></li>
                                        <li><Nav.Link href="#Contact" className="me-3" style={{color: 'white'}}> Contact </Nav.Link></li>

                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Subscribe</h3>
                                    </div>
                                    <div className="footer-text mb-25">
                                        <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                    </div>
                                    <div className="subscribe-form">
                                        <form action="#">
                                            <input type="text" placeholder="Email Address" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div className="copyright-text">
                                    <p>Copyright &copy; 2018, All Right Reserved </p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Terms</a></li>
                                        <li><a href="#">Privacy</a></li>
                                        <li><a href="#">Policy</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
