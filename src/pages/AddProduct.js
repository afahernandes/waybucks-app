import React, { useState } from "react";
import { Form, Button, Image } from "react-bootstrap";
import img from "../assets/img1.svg";
import attach from "../assets/attach.svg";


function AddProduct() {
    const dataproduct = JSON.parse(localStorage.getItem("dataproduct"));

    const [data, setData] = useState({
        id: "",
        img:"",
        price: "",
        product: ""
      });


    function handleOnSubmit(e) {
        e.preventDefault();
        data.id=Object.keys(dataproduct).length+1;
        dataproduct.push(data);
        console.log(dataproduct);
        localStorage.setItem("dataproduct", JSON.stringify(dataproduct)); 
      }
    
      function handleChange(e) {
        e.preventDefault();
        setData({
          ...data,
          id:"", 
          [e.target.name]: e.target.value,
         
        });
      }
    
    return (
        <div className="container">
            <div className="row text-red">
                <div className="col-md-7">
                    <h3>Product</h3>
                    <Form onSubmit={handleOnSubmit} className="my-5">
                        <Form.Group className="formGroup">
                            <Form.Control name="product"  className="formInput" onChange={(e)=>handleChange(e)} placeholder="Product Name" />
                        </Form.Group>
                        <Form.Group className="formGroup">
                            <Form.Control name="price" className="formInput" type="number" min={0}  onChange={(e)=>handleChange(e)} placeholder="Price" />
                        </Form.Group>
                        
                        <Form.Group className="input_container">
                            <Form.Control name="img" className="formInput" type="text" onChange={(e)=>handleChange(e)} placeholder="Photo Product" />
                            <Image src={attach} className="input_img" />

                        </Form.Group>
                       
                        <Form.Group className="formGroup">
                            <Button type="submit" className="button1" style={{ width: "100%" }}   block>Add Product</Button>
                        </Form.Group>
                    </Form>
                </div>
                <div className="col-md-5">
                    <Image src={img} alt="product" style={{width:"100%"}}/>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;