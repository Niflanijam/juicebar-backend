import React from "react";
import {Card } from "react-bootstrap";
import { Container, Row, CardTitle,Col } from "react-bootstrap";
import Form from "./form";

import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';




function Ourstory(){


return(

<>
<div className="bg2"container fluid >


<Card className="card-wrapper me-5 ms-5 p-md-5"  container >
      <Card.Body  className="cardourstory" m-3 >
        <Card.Title>Our Story</Card.Title>
       
        <Card.Text >
        What started as a love for fresh, natural ingredients turned into a mission to offer healthier, more delicious alternatives to sugary drinks. Inspired by the vibrant flavors of tropical fruits, we opened our Juice Bar to share the goodness of nature in every sip. With fresh, organic juices and a welcoming atmosphere, our juice bar quickly became a community favorite.
Freshness, health, and happiness—one sip at a time.
          
        </Card.Text>
   <Card.Text>From sun-kissed tropical fruits, our Sri Lankan juice bar crafts vibrant, healthy elixirs, born from a passion for natural ingredients and a desire to nourish our community. </Card.Text>
   <button className="btn btn-primary button3"  >Welcome Everyone</button>
      </Card.Body>
    </Card>




    
    
    


</div>




<div Container className="mt-5 m-5 P-3 review1">
          <Container className="mt-5 p-3">
              <Row >
                  <Col md='12' sm="12" Container fluid  >
                      <Card id="card5">
                          <CardTitle className="p-sm-0"><h1>Follow us</h1></CardTitle>
                          <Card.Text className="center p-3 m-4 p-sm-0">
                              Stay refreshed with our latest menu offerings at the Juice Bar! We provide a wide selection of fresh fruit and vegetable juices, smoothies, and bowls made from premium ingredients. Check out our regularly updated menu to explore new blends, prices, and seasonal offers.
                          </Card.Text>
                          <div className="d-flex flex-row align-item-center justify-content-center">
                              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                  <FaFacebook size={30} style={{ margin: '10px' }} />
                              </a>
                              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                  <FaInstagram size={30} style={{ margin: '10px' }} />
                              </a>
                              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                  <FaTwitter size={30} style={{ margin: '10px' }} />
                              </a>
                              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                  <FaLinkedin size={30} style={{ margin: '10px' }} />
                              </a></div>
                      </Card>
                  </Col>
                  <Col md={12} className="imgshow">
                      <img container fluid height={500} src="collection1.png" alt="collectionfruit" />
                  </Col>
              </Row>
          </Container>
      </div>
<div> <Form /></div>



 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 


 
    
    


    
    
    
    
    
    



















</>


























);
















}


export default Ourstory;