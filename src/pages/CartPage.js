import React, { useState } from "react";
import { Col, Form, Row, Button, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import del from "../assets/delete.svg";
import invoices from "../assets/invoices.svg";

function CartPage() {
  const router = useHistory();
  const data = JSON.parse(localStorage.getItem("datalogin"));
  const datatransaction = JSON.parse(localStorage.getItem("datatransaction"));

  const [datatr, setData] = useState({
    address: "",
    id: "",
    income: "",
    name: "",
    postCode: "",
    status: ""
  });


  const total=data.order.map(product => product.subtotal).reduce((a, b) => a + b, 0)
  
  
  const deleteCart = (ids) => {
    
    data.order.splice(data.order, ids+1);
    console.log(data);
    localStorage.setItem("datalogin", JSON.stringify(data)); 
    router.push('/cart');
    }

    function handleOnSubmit(e) {
      e.preventDefault();
      datatr.id=Object.keys(datatransaction).length+1;
      datatransaction.push(datatr);
      console.log(datatransaction);
      localStorage.setItem("datatransaction", JSON.stringify(datatransaction)); 

      data.order.map((product, i) => {
          data.order.splice(data.order);
        })
        console.log('dataaa',data);
        localStorage.setItem("datalogin", JSON.stringify(data)); 
     
      router.push('/');
    }

    function handleChange(e) {
      e.preventDefault();
      setData({
        ...datatr,
        [e.target.name]: e.target.value,
        status: "Waiting Approve",
        order: data.order,
        income: total
      });
    }

  return (
    <div>
      <Row className="justify-content-md-center">
        <Col xs={6}>
          <h3 className="header3">My Cart</h3>
          <p className="tittlePrice">Review Your Order</p>
          <hr />

                    
          <Row>
          {data.order.length < 1 ? <p>Your cart is empty.</p> : data.order.map((product, i) => (
         <div>
            <Row style={{ marginBottom: "10px" }} key={i}>
              <Col xs={2}>
                <Image src={product.img} width={"100%"}  alt="img" style={{marginTop:"8px"}} />
              </Col>
              <Col xs={7}>
              <span className="tittleProduct">{product.product_name}</span><br/>
              <span className="tittlePrice">{product.tgl}</span><br/>
                <span className="text-red" style={{fontSize:"14px"}}>Topping : {product.topping.map(topping => topping.name).join(', ')}</span>
              </Col>
              <Col xs={3} style={{ textAlign: "right" }}>
                <p className="tittleProduct">Rp {product.subtotal.toLocaleString()}</p>
                <img
                  style={{
                    width: "20px",
                    height: "20px",
                  }}
                  src={del} onClick={() => deleteCart(i)} alt="img" 
                />
              </Col>
            </Row>
            </div>
          ))}
            <hr />

            <Row className="mb-3">
              <Col xs={6}>
                <hr />
                <div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="text-red">Subtotal</div>
                                <div className="text-red">Rp. {total.toLocaleString()}</div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="text-red">Qty</div>
                                <div className="text-red">{data.order.length}</div>
                            </div>
                            <hr/>
                            <div className="d-flex justify-content-between align-items-center">
                                <strong className="text-red">Total</strong>
                                <strong className="text-red">Rp. {total.toLocaleString()}</strong>
                            </div>
                        
                    </div>
              </Col>
              <Col xs={6}>
                <div className="d-flex flex-column justify-content-space-beetwen">
                  <div className="box1"  style={{ textAlign: "center" }}>
                    <Image src={invoices} alt="Attach" /><br/>
                    <span className="tittlePrice">Attached Transactions</span>
              

                  </div>
                </div>
              </Col>
            </Row>
          </Row>
        </Col>
        <Col xs={4}>
          <div className="d-flex flex-column justify-content-space-beetwen" style={{marginTop:'25px'}}>
            <div>
            <Form onSubmit={handleOnSubmit}>
                        <Form.Group className="formGroup"><Form.Control name="name" className="formInput" onChange={(e)=>handleChange(e)} type="text" placeholder="Name" required></Form.Control></Form.Group>
                        <Form.Group className="formGroup"><Form.Control name="email" className="formInput" onChange={(e)=>handleChange(e)} type="email" placeholder="Email" required></Form.Control></Form.Group>
                        <Form.Group className="formGroup"><Form.Control name="phone" className="formInput"  onChange={(e)=>handleChange(e)} type="number" placeholder="Phone" required></Form.Control></Form.Group>
                        <Form.Group className="formGroup"><Form.Control name="postCode" className="formInput" onChange={(e)=>handleChange(e)} type="number" placeholder="Post Code" required></Form.Control></Form.Group>
                        <Form.Group className="formGroup"><Form.Control name="address" className="formInput" onChange={(e)=>handleChange(e)} type="text" placeholder="Address" as="textarea" rows={3} required></Form.Control></Form.Group>
                        <Button type="submit" variant="red" style={{width:'100%'}} block>Pay</Button>
                    </Form>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default CartPage;
