import "./App.css"

import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";

const App = () => {
    return (
        <>
            <NavBar />
            <ItemListContainer greeting="Vanesa" />
            <div className="countSection">
                <ItemCount stock="13" />
                <ItemCount stock="7" />
                <ItemCount stock="3" />
            </div>

        </>
    )
}


export default App;