import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../views";
import ItemDetailContainer from "../components/ItemDetailContainer";
import Cart from "../components/Cart";
import NavBar from "../components/NavBar";

export const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Home />} />
        <Route path="category/:id" element={<Home />} />
        <Route path="/detail/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};
