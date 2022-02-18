import { useContext } from "react"
import { CartContext } from "../context/CartContext"



const Cart = () => {
    const resultado = useContext(CartContext);
    console.log(resultado);

    return (
        <div>
            <h1>Carrito</h1>
            {/* hacer un map */}
        </div>
    )
}

export default Cart
