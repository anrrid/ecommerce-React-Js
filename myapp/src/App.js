// REACT ROUTER DOM
import { AppRouter } from "./routers";
import NavBar from "./components/NavBar";
import CustomProvider from "./context/CartContext"

const App = () => {

  return (
    <div>
      <CustomProvider>
        <NavBar />
        <AppRouter />
      </CustomProvider>
    </div>
  );
};

export default App;
