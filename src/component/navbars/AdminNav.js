import { useHistory } from 'react-router-dom';
import { Nav, Dropdown, Image } from 'react-bootstrap';
import { useState } from 'react';

import img1 from "../../assets/brandlogo.svg";
import img2 from "../../assets/transaction.svg";
import img3 from "../../assets/product.svg";
import img4 from "../../assets/topping.svg";
import img5 from "../../assets/logout.svg";

function AdminNav(props) {
    const router = useHistory();
    const goToTransaction = () => { router.push('/transaction') };
    const goToAddProduct = () => { router.push('/addproduct') };
    const goToAddTopping = () => { router.push('/addtopping') };
  
   
    
    return (
        <div>
            <Nav>
                <Dropdown >
                    <Dropdown.Toggle as={Nav.Link}><Image src={img1} alt="account" style={{width:'60px', height:'60px' }}/></Dropdown.Toggle>
                    <Dropdown.Menu align="right">
                        <Dropdown.Item onClick={goToTransaction} ><img src={img2} alt="profile" className="img-icon" />Transactions</Dropdown.Item>
                        <Dropdown.Item onClick={goToAddProduct} ><img src={img3} alt="profile" className="img-icon" />Add Product</Dropdown.Item>
                        <Dropdown.Item onClick={goToAddTopping} ><img src={img4} alt="profile" className="img-icon" />Add Topping</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={props.handleLogout}><img src={img5} alt="profile" className="img-icon" />Log Out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </div>
    )
};

export default AdminNav;