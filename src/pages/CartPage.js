import React from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import img1 from '../assets/img1.svg';

function CartPage() {
  return (
    <div>
      <Row className="justify-content-md-center">
        <Col xs={4}>
          <h3 className="header3">My Cart</h3>

          <Row>
             <Row>
                <Col xs={6}>
                <p className="header3">Total</p>
                <p className="tittlePrice">Topping : Topping 1, Topping 2, Topping 3</p>
                </Col>
                <Col xs={6} style={{textAlign:"right"}}>
                  <p className="header3">Rp 20.000</p>
                </Col>
              </Row>
          </Row>
        </Col>
        <Col xs={3}>
          <div className="d-flex flex-column justify-content-space-beetwen">
            <div>
              <Form>
                <Form.Group className="formGroup" controlId="formBasicEmail">
                  <Form.Label className="fromLabel">Email address</Form.Label>
                  <Form.Control
                    className="formInput"
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>
                <Form.Group className="formGroup" controlId="formBasicPassword">
                  <Form.Label className="fromLabel">Password</Form.Label>
                  <Form.Control
                    className="formInput"
                    type="password"
                    placeholder="Enter Password"
                  />
                </Form.Group>
                <Form.Group className="formGroup" controlId="formBasicFullname">
                  <Form.Label className="fromLabel">Full Name</Form.Label>
                  <Form.Control
                    className="formInput"
                    type="text"
                    placeholder="Enter Fullname"
                  />
                </Form.Group>

                <Button
                  className="button1"
                  style={{ width: "100%" }}
                  type="submit"
                >
                  Pay
                </Button>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default CartPage;
