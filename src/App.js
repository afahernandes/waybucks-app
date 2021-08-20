import React from "react";
//import LoginModal from "./component/modals/LoginModal";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./component/navbars/Header";
import  './styles/styles.css';
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
     <Header/>
     <Home/>

    </div>
  );
}

export default App;
