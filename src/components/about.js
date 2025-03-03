import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Carousel, Card, Container, Row, CardTitle } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Display from "./display";

import Col from 'react-bootstrap/Col';




function About() {
    return(


     

     
     
     
     
     
     
     

        <>











        <div container fluid id="main">

















          

    <div className="image1" >
          <h1>Your Favourite Juices</h1>
          <p>Fresh, healthy, delicious</p>
      </div>


<div>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <h3 className="head heading2-new">What's New</h3>
                    <Accordion.Body className="acc blur-card pt-3 m-0 p-5">
                        Experience the goodness of nature with our freshly squeezed juices!
                        Made from the finest, handpicked fruits, our juices are 100% natural,
                        refreshing, and packed with essential vitamins and minerals.
                        No preservatives, no additives—just pure, delicious refreshment in every sip!
                        Whether you crave the tangy zest of citrus, the sweetness of tropical mango,
                        or the earthy richness of berries, we have something for everyone.
                        Stay energized, stay hydrated, and enjoy the taste of real fruit in every glass!
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>



        </div><div id="Menu">
                <Container className="mt-5" >
                    <Carousel className="m-5" >
                        {/* First Slide */}
                        <Carousel.Item>
                            <Card className="text-center shadow-lg slide-card mt-5 m-5 card1" >
                                <Card.Img variant="top" src="watermelon.webp" className="imagejuice cover" alt="Fresh Juice 1" />
                                <Card.Body>
                                    <Card.Title>Fresh Watermelon Juice</Card.Title>
                                    <Card.Text>
                                        Refresh yourself with the naturally sweet and hydrating goodness of watermelon juice, packed with vitamins and flavor.
                                    </Card.Text>
                                    <button className="btn btn-primary">Price: 270/=</button>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>

                        {/* Second Slide */}
                        <Carousel.Item>
                            <Card className="text-center shadow-lg slide-card mt-5 m-5">
                                <Card.Img variant="top" src="mango.webp" className="imagejuice" alt="Fresh Juice 2" />
                                <Card.Body>
                                    <Card.Title>Mango Delight</Card.Title>
                                    <Card.Text>
                                        A tropical treat made from ripe mangoes, naturally sweet and refreshing.

                                    </Card.Text>
                                    <button className="btn btn-primary">Price: 200/=</button>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>

                        {/* Third Slide */}
                        <Carousel.Item>
                            <Card className="text-center shadow-lg slide-card  mt-5 m-5">
                                <Card.Img variant="top" src="orange.webp" alt="Fresh Juice 3" className="imagejuice" />
                                <Card.Body>
                                    <Card.Title>Orange pulp Delight</Card.Title>
                                    <Card.Text>
                                        A mix of oranges full of antioxidants, bursting with natural flavor and color.
                                    </Card.Text>
                                    <button className="btn btn-primary">Price: 350/=</button>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>




                        <Carousel.Item>
                            <Card className="text-center shadow-lg slide-card mt-5 m-5">
                                <Card.Img variant="top" src="grape.jpeg" className="imagejuice" alt="Fresh Juice 1" />
                                <Card.Body>
                                    <Card.Title>Grape Splash</Card.Title>
                                    <Card.Text>
                                        A refreshing blend of sweet and tangy grapes, perfect for a revitalizing drink.
                                    </Card.Text>
                                    <button className="btn btn-primary">Price: 300/=</button>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Card className="text-center shadow-lg slide-card mt-5 m-5">
                                <Card.Img variant="top" src="apple.jpeg" className="imagejuice" alt="Fresh Juice 2" />
                                <Card.Body>
                                    <Card.Title>Apple Breeze</Card.Title>
                                    <Card.Text>
                                        A crisp and fresh juice made from juicy apples, perfect for any time of day.
                                    </Card.Text>
                                    <button className="btn btn-primary">Price: 270/=</button>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Card className="text-center shadow-lg slide-card mt-5 m-5">
                                <Card.Img variant="top" src="pineapple.webp" className="imagejuice" alt="Fresh Juice 3" />
                                <Card.Body>
                                    <Card.Title>Pineapple Zest</Card.Title>
                                    <Card.Text>
                                        A tropical twist with tangy and sweet pineapple juice to lift your spirits.
                                    </Card.Text>
                                    <button className="btn btn-primary">Price: 350/=</button>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Card className="text-center shadow-lg slide-card mt-5 m-5">
                                <Card.Img variant="top" src="mixed.webp" className="imagejuice" alt="Fresh Juice 4" />
                                <Card.Body>
                                    <Card.Title>Mixed Juice</Card.Title>
                                    <Card.Text>
                                        A refreshing blend of multiple fruits, packed with flavors and nutrients to kickstart your day.
                                    </Card.Text>
                                    <button className="btn btn-primary">Price: 450/=</button>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Card className="text-center shadow-lg slide-card mt-5 m-5">
                                <Card.Img variant="top" src="strawberry.jpeg" className="imagejuice" alt="Fresh Juice 5" />
                                <Card.Body>
                                    <Card.Title>Strawberry Surge</Card.Title>
                                    <Card.Text>
                                        Sweet and tangy strawberry juice that’s bursting with flavor and antioxidants.
                                    </Card.Text>
                                    <button className="btn btn-primary">Price: 270/=</button>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>


                    </Carousel>

                </Container>


</div
>
                <div container fluid className="gap">


                </div>
                <br />
                <br />
                <br /> 
   
                

                <div container id="main" className="m-5">
        
        <Display /> 
       
      </div>





























   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   





                    <div Container className="mt-5 m-5 P-3 review1">

                        <Container className="mt-5 p-3">




                            <Row >

                                <Col md='12' sm="12" Container fluid  >
                                    <Card id="card5">


                                        <CardTitle className="p-sm-0 follow"><h1>Follow us</h1></CardTitle>

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


                                    <img container fluid height={500} src="collection.png" alt="collectionfruit" />


                                </Col>
                            </Row>




                        </Container>


                    </div>


   
   
   

   
   
   
   
   
   

   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   

   
   
   
   
   
   
   
   

   

                </div>
            
                </>





            );

}


export default About;