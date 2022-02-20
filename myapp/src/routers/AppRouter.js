import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Contact, About } from "../views";
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
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};
