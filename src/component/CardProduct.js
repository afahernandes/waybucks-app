import { Card, Row, Col } from "react-bootstrap";

function CardProduct({ item }) {
  return (
    <>
      <Row>
        <Col key={item.id} id={item.id}>
          <Card>
            <Card.Img
              src={item.img}
              width={"100%"}
              style={{ objectFit: "cover" }}
            />
            <Card.Body style={{ backgroundColor: "#F6E6DA" }}>
              <p className="tittleProduct">{item.product} </p>
              <p className="tittlePrice">{item.price} </p>  
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default CardProduct;
