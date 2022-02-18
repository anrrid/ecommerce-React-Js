import { createContext, useState, useContext } from "react"

export const CartContext = createContext();

export const { Provider, Consumer } = CartContext;

export const useContexto = () => {
    return useContext(CartContext)
}


export function ListProvider({ children }) {

    const [amount, setAmount] = useState([]);
    const [cart, setCart] = useState(0);


    const addToCart = (accountant, item) => {
        console.log("soy addToCart");
        console.log(accountant, item);

        if (isInCart()) {
            console.log("ya esta en el carrito");
            const newCart = cart.map(prod => {
                if (prod.id === item.id) {
                    prod.amount += accountant;
                }
                return prod;
            })
            setCart(newCart);
        } else {
            console.log("no esta en el carrito");
            setCart([...cart, { ...item, amount: accountant }]);
        }
        setAmount(accountant)

    }

    const isInCart = (item) => {
        const result = cart.find(prod => prod.id === item.id);
        return result !== undefined;
    };

    const removeFromCart = (id) => {
        const filterCart = cart.filter = (item) => {
            return (item.id !== id)
        }
    };

    const emptyCart = () => {
        setCart([]);
    };

    const valueOfContext = {
        cart: cart,
        addToCart: addToCart,
        isInCart: isInCart,
        removeFromCart: removeFromCart,
        emptyCart: emptyCart

    };

    return (<Provider value={valueOfContext}>
        {children}
    </Provider>);
} 