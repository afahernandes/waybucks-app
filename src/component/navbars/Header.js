import React from "react";
import { Navbar, Container, Nav,  NavLink } from "react-bootstrap";
import Icon from "../../assets/brandlogo.svg";
import { useState } from "react";
import GuestNav from "./GuestNav";
import AdminNav from "./AdminNav";
import UserNav from "./UserNav";


function Header() {
  
  const datalogin = JSON.parse(localStorage.getItem('datalogin'))
  console.log(datalogin);


  const [data, setData] = useState({
    isLogin: false,
    email: "",
    password: "",
    status: "",
  });

 

  function handleLogout(){

    localStorage.removeItem('datalogin');
    setData({ isLogin: false,
      email: "",
      password: "",
      status: "",})
    }
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand>
            <NavLink >
              <img src={Icon} style={{padding: '2px'}} alt="brand" />
            </NavLink>
          </Navbar.Brand>
            <Nav className="me-auto"></Nav>
            <Nav>
              {datalogin?(datalogin.status==="Admin"?<AdminNav  handleLogout={handleLogout}/> : <UserNav handleLogout={handleLogout}  /> ) : <GuestNav setData={setData} />}
            </Nav>
        </Container>
      </Navbar>
    
    </div>
  );
}

export default Header;
