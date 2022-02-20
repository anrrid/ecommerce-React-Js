import { useContexto } from "../context/CartContext";
import { NavLink } from "react-router-dom";

const Cart = () => {
    const { cart, deleteProduct, cleanCart, totalPrice } = useContexto();
    console.log(cart);

    return (
        <div>
            <h1>Carrito</h1>
            {cart.length > 0 ? (
                <div>
                    <ul>
                        {cart.map((product) => {
                            return <li key={product.id}>
                                {product.article} - ${product.price} - {product.amount}
                                <button onClick={() => deleteProduct(product.id)}>Borrar</button>
                            </li>
                        })}
                    </ul>
                    <button onClick={cleanCart}>Limpiar Carrito</button>
                </div>
            ) :
                <div>
                    <p>No hay productos en el carrito</p>
                    <NavLink to="/productos" className="nav-enlace">Volver a inicio</NavLink>
                </div>
            }
        </div>


    )
}

export default Cart
