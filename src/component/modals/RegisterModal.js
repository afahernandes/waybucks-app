import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";

function RegisterModal(props) {
  const datauser = JSON.parse(localStorage.getItem("datauser"));

  const { handleClose, show, login } = props;
  const [data, setData] = useState({
    id: "",
    image:"",
    email: "",
    password: "",
    fullname: "",
    username: "",
    gender: "",
    address: "",
    phone: "",
    status: "",
    order: [],
  });

  function toSwitch() {
    handleClose();
    login();
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    data.id=Object.keys(datauser).length+1;
    datauser.push(data);
    console.log(datauser);
    localStorage.setItem("datauser", JSON.stringify(datauser)); 
    handleClose();
  }

  function handleChange(e) {
    e.preventDefault();
    setData({
      ...data,
      id:"", 
      image:"https://ujhw03sswsepgw3234x0qm51-wpengine.netdna-ssl.com/wp-content/uploads/2018/05/171025-202659-Donnely-Christopher-400x400x72.jpg",
      [e.target.name]: e.target.value,
      username: "",
      gender: "",
      address: "",
      phone: "",
      status: "Customer",
      order: [],
    });
  }

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Form onSubmit={handleOnSubmit}>
            <h2 style={{ color: "red" }}>
              <b>Register</b>
            </h2>
            <Form.Group className="formGroup" controlId="formBasicEmail">
              <Form.Label className="fromLabel">Email address</Form.Label>
              <Form.Control
                className="formInput"
                onChange={(e) => handleChange(e)}
                type="email"
                name="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="formGroup" controlId="formBasicPassword">
              <Form.Label className="fromLabel">Password</Form.Label>
              <Form.Control
                className="formInput"
                onChange={(e) => handleChange(e)}
                type="password"
                name="password"
                placeholder="Enter Password"
              />
            </Form.Group>
            <Form.Group className="formGroup" controlId="formBasicFullname">
              <Form.Label className="fromLabel">Full Name</Form.Label>
              <Form.Control
                className="formInput"
                onChange={(e) => handleChange(e)}
                type="text"
                name="fullname"
                placeholder="Enter Fullname"
              />
            </Form.Group>
            <Button className="button1" style={{ width: "100%" }} type="submit">
              Register
            </Button>

            <Form.Label className="formLabelCenter">
              Already have an account ?
              <Form.Label onClick={toSwitch}>
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
