import { Card,  Row,Col } from "react-bootstrap";
import imgtopping from '../assets/brandlogo.svg';

function CardListtopping() {
  return (
    
    <Row xs={1} md={4} className="g-6">
  {Array.from({ length: 8 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={imgtopping} />
        <Card.Body>
          <p>Card title</p>
         
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
  );
};

export default CardListtopping;