import { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import img1 from "../assets/img1.svg";
import CardTopping from "../component/CardTopping";

function DetailProduct() {
  const toppings = JSON.parse(localStorage.getItem("datatopping"));
  const data = JSON.parse(localStorage.getItem("dataproduct"));
  const datalogin = JSON.parse(localStorage.getItem("datalogin"));
  const datauser = JSON.parse(localStorage.getItem("datauser"));

  const params = useParams();

  const products = data.find((item) => item.id === parseInt(params.id));

  const [checkedToppings, setCheckedToppings] = useState({});
  const handleChange = (event) => {
    setCheckedToppings({
      ...checkedToppings,
      [event.target.id]: event.target.checked,
    });
  };

  const selectedToppingsId = [];
  for (var key in checkedToppings) {
    if (checkedToppings.hasOwnProperty(key)) {
      checkedToppings[key]
        ? selectedToppingsId.push(key)
        : selectedToppingsId.splice(key, 1);
    }
  }
  console.log(selectedToppingsId);

  const selectedToppings = selectedToppingsId.map((selectedToppingId) =>
    toppings.find((topping) => topping.id == selectedToppingId)
  );

  console.log(selectedToppings);

  const subTotal = selectedToppings.map(selectedTopping => selectedTopping.price).reduce((prev, curr) => prev + curr, products.price);
  console.log(subTotal);

  function handleOnSubmit() {
   const orders={id:1 , tgl :"22 August 2021", product_name: products.product, img: products.img, topping :selectedToppings, subtotal : subTotal,}
    datalogin.order.push(orders);
    console.log(datalogin.order);
    localStorage.setItem("datalogin", JSON.stringify(datalogin)); 

  }

  return (
    <>
    <Form onSubmit={handleOnSubmit}>
      <Row className="justify-content-md-center">
        <Col xs={4}>
          <img src={products.img} width={"100%"} alt="product" />
        </Col>
        <Col xs={6}>
          <div className="d-flex flex-column justify-content-space-beetwen">
            <div>
              <h3 className="header3">{products.product}</h3>
              <p className="tittlePrice">Rp {products.price.toLocaleString()}</p>
            </div>
            <div>
              <p className="header3">Choose Toppings</p>
              <Row>
                {toppings.map((topping) => (
                  <CardTopping
                    topping={topping}
                    key={topping.id}
                    onChange={handleChange}
                    checked={checkedToppings[topping.id] || false}
                  />
                ))}
              </Row>
            </div>
            <div>
              <Row>
                <Col xs={6}>
                  <p className="header3">Subtotal</p>
                </Col>
                <Col xs={6} style={{ textAlign: "right" }}>
                  <p className="header3">Rp {subTotal.toLocaleString()}</p>
                </Col>
              </Row>
            </div>

            <div>
              <Button
                className="button1"
                style={{ width: "100%" }}
                type="submit"
              >
                Add To Cart
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <hr />
      </Form>
    </>
  );
}
export default DetailProduct;
