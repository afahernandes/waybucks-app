import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";


function Header() {
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand>Toko Kopi</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Button className="button2">Login</Button>
             <Button className="button1">Register</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
