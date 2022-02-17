// REACT ROUTER DOM
import { AppRouter } from "./routers";
import React, { useState } from "react";

// COMPONENTS
import NavBar from "./components/NavBar";

// VIEWS
// import Home from "./views/Home/Home";
// import About from "./views/About/About";
// import Contact from "./views/Contact/Contact";
import ItemDetailContainer from "../src/components/ItemDetailContainer";
import Cart from "./components/Cart";
import { ListProvider } from "./context/CartContext";

const App = (props) => {
  const [data, setData] = useState("");

  const itemToItemDetail = () => {
    setData(props);
  };

  return (
    <div>
      <NavBar />
      <AppRouter />
      {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/detail/:itemId"
            element={<ItemDetailContainer itemToItemDetail={data} />}
          />
          <Route path="/cart/:amount" element={<Cart />} />
        </Routes>
      </div> */}
    </div>
  );
};

export default App;
