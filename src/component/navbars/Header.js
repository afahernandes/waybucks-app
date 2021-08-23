import React from "react";
import { Navbar, Container, Nav,  NavLink } from "react-bootstrap";
import Icon from "../../assets/brandlogo.svg";
import { useState } from "react";
import GuestNav from "./GuestNav";
import AdminNav from "./AdminNav";
import UserNav from "./UserNav";
import {  useHistory } from "react-router-dom";


function Header() {
  
  const router = useHistory();
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
    localStorage.removeItem('login');
    setData({ isLogin: false,
      email: "",
      password: "",
      status: "",})
      
      router.push('/');
    }

    function hadleHome(){

        router.push('/');
      }
  

  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand>
            <NavLink >
              <img src={Icon} onClick={hadleHome} style={{padding: '4px'}} alt="brand" />
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
