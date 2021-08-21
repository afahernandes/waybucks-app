import React from "react";
//import LoginModal from "./component/modals/LoginModal";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./component/navbars/Header";
import  './styles/styles.css';
import DetailProduct from "./pages/DetailProduct";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <div className="App">
     <Header/>
     <Home/>
     <CartPage/>
    </div>
  );
}
export default App;
