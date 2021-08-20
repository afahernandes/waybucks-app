import React from "react";
import { Form, Button, Modal } from "react-bootstrap";


function RegisterModal(props) {
  const { handleClose, show } = props;

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Form>
            <h2 style={{color:'red'}}><b>Register</b></h2>
            <Form.Group className="formGroup" controlId="formBasicEmail">
              <Form.Label className="fromLabel">Email address</Form.Label>
              <Form.Control className="formInput" type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="formGroup" controlId="formBasicPassword">
              <Form.Label className="fromLabel">Password</Form.Label>
              <Form.Control className="formInput" type="password" placeholder="Enter Password" />
            </Form.Group>
            <Form.Group className="formGroup" controlId="formBasicFullname">
              <Form.Label className="fromLabel">Full Name</Form.Label>
              <Form.Control className="formInput" type="text" placeholder="Enter Fullname" />
            </Form.Group>


            <Button className="button1" style={{ width: "100%" }} type="submit">
              Register
            </Button>
            <Form.Label className="formLabelCenter">
              Already have an account ?
              <Form.Label onClick={handleClose}>
                <b>Klik Here</b>
              </Form.Label>
            </Form.Label>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default RegisterModal;
