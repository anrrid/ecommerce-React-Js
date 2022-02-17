import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Contact, About } from "../views";
import ItemDetailContainer from "../components/ItemDetailContainer";
import Cart from "../components/Cart";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route
          path="/detail/:itemId"
          element={<ItemDetailContainer />} />
        <Route path="/cart/:amount" element={<Cart />} />
      </Routes>
    </Router>
  );
};
