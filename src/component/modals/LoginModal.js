import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function LoginModal(props) {
  const route = useHistory();
  const datauser = JSON.parse(localStorage.getItem("datauser"));
  const { handleClose, show, regis } = props;

  const [data, setData] = useState({
    isLogin: false,
    email: "",
    password: "",
    status: "",
  });

  // localStorage.setItem('datalogin', JSON.stringify(data));

  function toSwitch() {
    handleClose();
    regis();
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    datauser.map(function (element) {
      if (data.email === element.email && data.password === element.password) {
        localStorage.setItem("datalogin", JSON.stringify(element));
        props.setData(data);
        handleClose();
      } else {
        console.log("gagal");
      }
    });
  }

  function handleChange(e) {
    e.preventDefault();
    setData({
      ...data,
      isLogin: true,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body>
        <Form onSubmit={handleOnSubmit}>
          <h2 style={{ color: "red" }}>
            <b>Login</b>
          </h2>
          <Form.Group className="formGroup" controlId="email">
            <Form.Label className="fromLabel">Email address</Form.Label>
            <Form.Control
              className="formInput"
              onChange={(e) => handleChange(e)}
              type="email"
              name="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="formGroup" controlId="password">
            <Form.Label className="fromLabel">Password</Form.Label>
            <Form.Control
              className="formInput"
              type="password"
              onChange={(e) => handleChange(e)}
              name="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button className="button1" style={{ width: "100%" }} type="submit">
            Submit
          </Button>
          <Form.Label className="formLabelCenter">
            Don't have an account ?
            <Form.Label onClick={toSwitch}>
              <b>Klik Here</b>
            </Form.Label>
          </Form.Label>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default LoginModal;
