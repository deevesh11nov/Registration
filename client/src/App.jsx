import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Property from "./pages/Property";
import Inventory from "./pages/Inventory";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/property" element={<Property />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
