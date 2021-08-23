import {  Col, Row } from "react-bootstrap";
import photo from "../assets/photo.png";
import brandlogo from "../assets/brandlogo.svg";
import qr from "../assets/qr.svg";

function Profile() {
  const user = JSON.parse(localStorage.getItem("datalogin"));
  console.log(user);
  const datatransactions = JSON.parse(localStorage.getItem("datatransaction"));
  console.log(datatransactions);

  return (
    <Row className="justify-content-md-center">
      <Col xs={4}>
      <h5 className="header3">
            <strong>My Profile</strong>
          </h5>
        <Row xs={10}>
          
          <Col xs={6}>
            <img src={photo} alt="profile" width={'100%'} />
          </Col>
          <Col xs={6}>
            <Row className="xs-3">
              <strong className="text-red">Full Name</strong>
              <p>{user.fullname}</p>
              <strong className="text-red">Email</strong>
              <p>{user.email}</p>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col xs={6}>
        <h5 className="header3">
          <strong>My Transaction</strong>
        </h5>
        <div className="box1">
        {datatransactions.length < 1 ? (
          <p className="text-secondary">There's no transaction yet</p>
        ) : (
          <ul className="list-group rounded">
            {datatransactions.map(
              (
                datatransaction // transaction
              ) => (
                <li
                  className="list-group-item list-group-item-danger mb-3"
                  key={datatransaction.id}
                >
                  <div className="row">
                    <div className="col-md-9">
                      <ul className="list-group">
                        {datatransaction.order.map((order) => (
                          <li
                            className="list-group-item list-group-item-danger"
                            key={order.id}
                          >
                            <div className="d-flex align-items-center ">
                              <img
                                src={order.img}
                                alt="product"
                                style={{width:'50px',margin :'15px' }}
                              />
                              <div className="ml-3 text-red">
                                <h5>
                                  <strong>
                                    {order.product_name}
                                  </strong>
                                </h5>
                                <p>
                                  <span className="text-brown">Topping : </span>
                                  {order.topping
                                    .map(
                                      (topping) =>
                                      topping.name
                                    )
                                    .join(", ")}
                                </p>
                                <p>
                                  <span className="text-brown">
                                    SubTotal :
                                  </span>
                                  Rp. {order.subtotal.toLocaleString()}
                                 
                                </p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-md-3 text-center">
                      <img src={brandlogo} alt="logo"></img>
                      <img
                        src={qr}
                        alt="logo"
                      ></img>
                      <p>
                        Total :<br />
                        <strong>Rp. {datatransaction.income.toLocaleString()}</strong>
                      </p>
                      <div className="my-3">
                        <label >{datatransaction.status}</label>
                        
                      </div>
                    </div>
                  </div>
                </li>
              )
            )}
          </ul>
        )}
        </div>
      </Col>
    </Row>
  );
}

export default Profile;
