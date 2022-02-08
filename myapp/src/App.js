import "./App.css"

import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {
    return (
        <>
            <NavBar />
            <div className="countSection">
                <ItemListContainer />
                {/* <ItemDetailContainer /> */}
            </div>
        </>
    )
}


export default App;