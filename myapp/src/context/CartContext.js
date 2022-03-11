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
        console.log(addToCart)
        const id = product.id;

        if (isInCart(id)) {
            const copyCart = [...cart];
            let match = copyCart.find((item) => item.id === id);
            match.amount += amount;
            setCart(copyCart)
        } else {
            const copyProduct = { ...product }
            copyProduct.amount = amount;
            console.log("copyProduct", copyProduct)

            const copyCart = [...cart, copyProduct]
            setCart(copyCart)
            console.log("copyCart", copyCart)
        }

        const copyTotalAmount = totalAmount + amount;
        setTotalAmount(copyTotalAmount)

        const copyTotalPrice = totalPrice + product.price * amount;
        setTotalPrice(copyTotalPrice)
    }


    const deleteProduct = (id, amount) => {
        const copyCart = cart.filter((product) => product.id !== id)
        setCart(copyCart);
        setTotalAmount(totalAmount - amount);
        setTotalPrice(totalPrice - amount * cart.find((product) => product.id === id).price);

    };


    const cleanCart = () => {
        setCart([])
        setTotalAmount(0)
    }


    const isInCart = (id) => {
        const producto = cart.find((producto) => producto.id === id);
        return producto !== undefined;
    };

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

