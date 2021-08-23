import React from "react";
//import LoginModal from "./component/modals/LoginModal";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import Header from "./component/navbars/Header";
import  './styles/styles.css';
import DetailProduct from "./pages/DetailProduct";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import NotFound from "./pages/NotFound";
import Transactions from "./pages/Transactions";


import { Container, Row } from "react-bootstrap";

import datauser from "./data/datauser.json"
import dataproduct from "./data/dataproduk"
import datatopping from "./data/topping.json"
import datatransaction from "./data/Transaction.json"
import AddProduct from "./pages/AddProduct";
import AddTopping from "./pages/AddTopping";

function App() {
  localStorage.setItem('datauser', JSON.stringify(datauser));
  localStorage.setItem('dataproduct', JSON.stringify(dataproduct));
  localStorage.setItem('datatopping', JSON.stringify(datatopping));
  localStorage.setItem('datatransaction', JSON.stringify(datatransaction));
  return (
    
    <Router>
    <div className="App">
     <Header/>
     <Container>
        <Row className="justify-content-md-center">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product" exact component={DetailProduct} />
        <Route path="/cartPage" exact component={CartPage} />

        <Route path="/transaction" exact component={Transactions} />
        <Route path="/addproduct" exact component={AddProduct} />
        <Route path="/addtopping" exact component={AddTopping} />

        <Route component={NotFound} />
      </Switch>
    </Row></Container>

    </div>
    </Router>
  );
}
export default App;
