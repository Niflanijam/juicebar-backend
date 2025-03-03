import React from "react";
import {  Container, Row} from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

import Col from 'react-bootstrap/Col';




function Footer(){
return(

<>

<div> <footer className="bg-dark text-white py-4">
                     <Container>
                         <Row>
                             <Col md={6} sm={12}>
                                 <div className="d-flex flex-column align-items-center">
                                     <p><img src="juicelogo.png" alt="Juice Bar Logo" height="50" className="mb-3" />Juice Bar</p>
                                     <p className="text-center">Address: Ikkirigollewa, Anuradhapura</p>
                                 </div>
                             </Col>
                             {/* Follow Us Section */}
                             <Col md={6} sm={12} className="d-flex justify-content-center align-items-center">
                                 <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                     <FaFacebook size={30} style={{ margin: '10px', color: 'white' }} />
                                 </a>
                                 <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                     <FaInstagram size={30} style={{ margin: '10px', color: 'white' }} />
                                 </a>
                                 <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                     <FaTwitter size={30} style={{ margin: '10px', color: 'white' }} />
                                 </a>
                                 <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                     <FaLinkedin size={30} style={{ margin: '10px', color: 'white' }} />
                                 </a>
                             </Col>
                         </Row>
                         {/* Copyright Section */}
                         <Row>
                             <Col className="text-center mt-3">
                                 <p>&copy;{new Date().getFullYear()} Nifla - All Rights Reserved</p>
                             </Col>
                         </Row>
                     </Container>
                 </footer>
                 </div>



















</>






);






}


export default Footer;