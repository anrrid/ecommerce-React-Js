
// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// COMPONENTS
import NavBar from "./components/NavBar";
// import ItemListContainer from "./components/ItemListContainer";
// import ItemDetailContainer from "./components/ItemDetailContainer";

// VIEWS
import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import ItemDetailContainer from '../src/components/ItemDetailContainer';

const App = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/detail/:itemToItemDetail' element={<ItemDetailContainer />} />
                </Routes>
            </div>
        </Router>
    )
}


export default App;