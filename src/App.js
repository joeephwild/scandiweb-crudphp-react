import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Addproduct from "./pages/Addproduct";
import Productpage from "./pages/Productpage";

function App() {
  return (
    <>
     
      <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Productpage />}/>
        <Route path="/addproduct" element={<Addproduct />} />
      </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
