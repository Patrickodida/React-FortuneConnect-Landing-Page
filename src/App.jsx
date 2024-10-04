import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pricingpage from "./pages/Pricing";

function App(){
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/pricing" element={<Pricingpage />} />
    </Routes>
  )
}

export default App;