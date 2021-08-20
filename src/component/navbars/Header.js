import React from "react";
import { Navbar, Container, Nav, Button, NavLink } from "react-bootstrap";
import Icon from "../../assets/brandlogo.svg";
import LoginModal from "../modals/LoginModal";
import { useState } from "react";
import RegisterModal from "../modals/RegisterModal";


function Header() {
  const [show, setShow] = useState(false);
  const [showRegis, setShowRegis] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleShowRegis = () => setShowRegis(true);
  const handleCloseRegis = () => setShowRegis(false);

  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand>
            <NavLink>
              <img src={Icon} style={{padding: '2px'}} alt="brand" />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Button className="button2" onClick={handleShow}>Login</Button>
              <Button className="button1" onClick={handleShowRegis} >Register</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <LoginModal show={show} handleClose={handleClose}/>
      <RegisterModal show={showRegis} handleClose={handleCloseRegis}/>
    </div>
  );
}

export default Header;
