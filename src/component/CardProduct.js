
import { Card, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";




function CardProduct({ item }) {
   const router = useHistory();

  const handlePushToDetail = (id) => {
    const datalogin = JSON.parse(localStorage.getItem("datalogin"));
 
    console.log(datalogin);
    if (!datalogin) {
      return (
       alert("Please Login")
      );
    } else {
      console.log(id);
      router.push(`product/${id}`);
    }
  };
  return (
    <>
      <Row>
        <Col key={item.id} id={item.id}>
          <Card onClick={() => handlePushToDetail(item.id)}>
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
