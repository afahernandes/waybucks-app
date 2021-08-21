import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "../assets/banner.svg";
import CardList from "../component/CardList";
import data from "../data/dataproduk";
import DetailProduct from "./DetailProduct";
function Home() {
  return (
    <div>
      <Container>
        
        <Row className="justify-content-md-center">
          <Col md="auto">
            <img src={Banner} alt="v" style={{ width: "100%" }} />
            <h3 className="header3">Let’s Order</h3>
          </Col>
        </Row>
      </Container>

      <Container style={{marginBottom:'20px'}}>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <CardList data={data} />
          </Col>
        </Row>
      </Container>
      
      <Container style={{marginBottom:'20px'}}>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <DetailProduct/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
