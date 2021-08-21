import React from "react";
//import LoginModal from "./component/modals/LoginModal";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./component/navbars/Header";
import  './styles/styles.css';
import DetailProduct from "./pages/DetailProduct";

function App() {
  return (
    <div className="App">
     <Header/>
     <DetailProduct/>

    </div>
  );
}
export default App;
