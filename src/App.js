import React from "react";
import { Route, Routes } from "react-router-dom";
import Addproduct from "./pages/Addproduct";
import Productpage from "./pages/Productpage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Productpage />}/>
        <Route path="/addproduct" element={<Addproduct />} />
      </Routes>
    </div>
  );
}

export default App;
