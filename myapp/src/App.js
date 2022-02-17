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
import { ListProvider } from "./context/CartContext";

const App = (props) => {
  const [data, setData] = useState("");

  const itemToItemDetail = () => {
    setData(props);
  };

  return (
    <ListProvider value={[]} initial={0} min={0} max={10}>
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
    </ListProvider>
  );
};

export default App;
