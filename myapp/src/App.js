import "./App.css"

import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
    return (
        <>
            <NavBar />
            <div className="countSection">
                <ItemListContainer />
            </div>
        </>
    )
}


export default App;