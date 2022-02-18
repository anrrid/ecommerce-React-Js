// REACT ROUTER DOM
import { AppRouter } from "./routers";
import NavBar from "./components/NavBar";
import { ListProvider } from "./context/CartContext";

const App = () => {

  return (
    <div>
      <ListProvider>
        <NavBar />
        <AppRouter />
      </ListProvider>
    </div>
  );
};

export default App;
