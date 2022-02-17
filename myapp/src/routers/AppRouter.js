import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Contact, About } from "../views";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};