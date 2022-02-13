// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

// COMPONENTS
import NavBar from "./components/NavBar";

// VIEWS
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import ItemDetailContainer from "../src/components/ItemDetailContainer";
import Cart from "./components/Cart";

const App = (props) => {
  const [data, setData] = useState("");

  const itemToItemDetail = () => {
    setData(props);
  };

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/detail/:itemId"
            element={<ItemDetailContainer itemToItemDetail={data} />}
          />
          <Route path="/cart/:amount" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
