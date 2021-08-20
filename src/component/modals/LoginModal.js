import React from "react";
import { Form, Button, Modal } from "react-bootstrap";


function LoginModal(props) {
  const { handleClose, show } = props;

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Form>
            <h2 style={{color:'red'}}><b>Login</b></h2>
            <Form.Group className="formGroup" controlId="formBasicEmail">
              <Form.Label className="fromLabel">Email address</Form.Label>
              <Form.Control className="formInput" type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="formGroup" controlId="formBasicPassword">
              <Form.Label className="fromLabel">Password</Form.Label>
              <Form.Control className="formInput" type="password" placeholder="Password" />
            </Form.Group>

            <Button className="button1" style={{ width: "100%" }} type="submit">
              Submit
            </Button>
            <Form.Label className="formLabelCenter">
              Don't have an account ?
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

export default LoginModal;
