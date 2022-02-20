// REACT ROUTER DOM
import { AppRouter } from "./routers";
import CustomProvider from "./context/CartContext"
const App = () => {

  return (
    <div>
      <CustomProvider>
        <AppRouter />
      </CustomProvider>
    </div>
  );
};

export default App;
