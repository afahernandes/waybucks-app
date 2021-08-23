import { Row, Col,Button } from "react-bootstrap";
import img1 from "../assets/img1.svg";

import data from "../data/dataproduk";
import CardListtopping from "../component/CardListtoping";


function DetailProduct() {
  return (
    <>
      <Row className="justify-content-md-center">
        <Col xs={4}>
          <img src={img1} width={"100%"} alt="product" />
        </Col>
        <Col xs={6}>
          <div className="d-flex flex-column justify-content-space-beetwen">
            <div>
              <h3 className="header3">Ice Coffee Late{data.location}</h3>
              <p className="tittlePrice">Rp 20.000{data.description}</p>
            </div>
            <div>
              <p className="header3">Ice Coffee Late{data.location}</p>

              <CardListtopping />
            </div>
            <div>
              <Row>
                <Col xs={6}>
                  <p className="header3">Total</p>
                </Col>
                <Col xs={6} style={{textAlign:"right"}}>
                  <p className="header3">Rp 20.000</p>
                </Col>
              </Row>
            </div>

            <div>
            <Button className="button1" style={{ width: "100%" }} type="submit">
              Add To Cart
            </Button>
            </div>
          </div>
        </Col>
      </Row>
      <hr />
    </>
  );
}
export default DetailProduct;
