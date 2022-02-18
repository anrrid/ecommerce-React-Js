import { createContext, useState } from "react"

export const CartContext = createContext();

export const { Provider, Consumer } = CartContext;


// export const useListContext = () => useContext(CartContext);
export function ListProvider({ children }) {

    const [cart, setCart] = useState([]);


    // const isInCart = (id) => {
    //     // aca va la logica de ver si el prod esta en el carrito  o no y en tal caso retornar true o false    
    //     //return cart.findIndex(item => item.id === id) !== -1;
    // }

    const addToCart = (accountant, item) => {
        console.log("soy addToCart");
        console.log(accountant, item);
        setCart([...cart, { accountant: accountant, item: item }]);
    }

    const removeFromCart = () => {
    }

    const emptyCart = () => {
        setCart([]);
    }

    const valueOfContext = {
        cart: cart,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        emptyCart: emptyCart

    }

    return <Provider value={valueOfContext}>
        {children}
    </Provider>
} 