import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <Navbar expand="lg" bg="light" className="p-3">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="/juicelogo.png"
            width={30}
            height={30}
            className="d-inline-block align-top"
            alt="Juice Bar Logo"
          />
          <span className="ms-2">Juice Bar</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ms-auto ms-lg-2 me-2" >
            <Nav.Link href="#Menu" as={Link} to={"/"}  className="me-4">Menu</Nav.Link>
            <Nav.Link  as={Link} to="/Ourstory" className="me-4">Our Story</Nav.Link>
    
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;