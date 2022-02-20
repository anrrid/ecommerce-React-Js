import { createContext, useContext, useState } from 'react';

const contexto = createContext();

const { Provider } = contexto;

export const useContexto = () => {
    return useContext(contexto);
}


const CustomProvider = ({ children }) => {

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0)
    const [cart, setCart] = useState([]);

    const addToCart = (amount, product) => {
        console.log("soy el provider")



        const copyProduct = { ...product }
        copyProduct.amount = amount;

        const copyCart = [...cart, copyProduct]
        setCart(copyCart)

        const copyTotalAmount = totalAmount + amount;
        setTotalAmount(copyTotalAmount)
    }


    const deleteProduct = (id) => {
        const copyCart = cart.filter(product => product.id !== id)
        setCart(copyCart)

    }


    const cleanCart = () => {
        setCart([])
        setTotalAmount(0)
    }


    const isInCarrito = (id) => {
        const product = cart.find(product => product.id === id)
        return product !== undefined

    }

    const valueCartContext = {
        cart,
        totalAmount,
        totalPrice,
        addToCart,
        cleanCart,
        deleteProduct

    }

    return (
        <Provider value={valueCartContext}>
            {children}
        </Provider>
    )

}

export default CustomProvider;

