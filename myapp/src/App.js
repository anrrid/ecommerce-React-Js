
// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';


// COMPONENTS
import NavBar from "./components/NavBar";


// VIEWS
import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import ItemDetail from '../src/components/ItemDetail';

const App = (props) => {

    const [data, setData] = useState('');

    const itemToItemDetail = () => {
        setData(props)
    }

    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/detail/:ItemDetail' element={<ItemDetail itemToItemDetail={data} />} />
                </Routes>
            </div>
        </Router>
    )
}


export default App;