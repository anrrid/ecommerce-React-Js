import React, { useContext, useState } from "react"

export const CartContext = React.createContext([]);

export const useListContext = () => useContext(CartContext);
export function ListProvider({ value, initial, min, max, children }) {

    const [list, setList] = useState(value || []);
    const [counter, setCounter] = useState(initial);

    const handlerCounterUp = () => {
        if (counter < max) {
            setCounter(counter + 1);
        }

    }

    const handlerCountDown = () => {
        if (counter > min) {
            setCounter(counter - 1);
        }
    }

    function onCountChange(event) {
        setCounter(event.target.value)
    }

    function addItem(newItem) {
        const itemList = [...list, newItem];
        setList(itemList);
    };

    function clean() {
        setList([]);
    }

    return <CartContext.Provider value={{ list, handlerCounterUp, handlerCountDown, counter, onCountChange, addItem, quantity: list.length, clean }}>
        {children}
    </CartContext.Provider>
} 