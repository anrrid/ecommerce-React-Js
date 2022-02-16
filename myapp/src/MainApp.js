import React, { useState } from 'react';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemsContext } from './components/ItemsContext';


export const MainApp = ({ }) => {

    const [items, setItems] = useState([
        {},
    ]);

    const addItems = (itemId) => {
        const newItem = items.map((product) => {
            return itemId === product.id
                ? { ...product, votes: product.votes + 1 }
                : product;
        });

        setItems(newItem);
    };


    return (
        <ItemsContext.Provider value={{
            items,
            addItems,
        }}>
            <App />
        </ItemsContext.Provider>
    );
};