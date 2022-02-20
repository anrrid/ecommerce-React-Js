import { useContexto } from "../context/CartContext";
import { Link, NavLink } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button"
import ListGroup from 'react-bootstrap/ListGroup'

const Cart = () => {
    const { cart, deleteProduct, cleanCart, totalPrice } = useContexto();
    console.log("contenido del cart", cart);

    return (
        <div>
            <Card>
                <Card.Header>Cart</Card.Header>
                <Card.Body>
                    {cart.length > 0 ? (
                        <div>
                            <ListGroup>
                                {cart.map((product) => {
                                    return <ListGroup.Item key={product.id}>
                                        {product.article} - ${product.price} - {product.amount} u.
                                        <Button onClick={() => deleteProduct(product.id)} style={{ margin: "7px" }}>Delete</Button>
                                    </ListGroup.Item>
                                })}
                            </ListGroup>
                            <div>
                                <Button onClick={cleanCart} style={{ margin: "7px" }}>Clean cart</Button></div>

                            <div>
                                <Link to={"/Products"} style={{ margin: "7px" }}><Button>Keep buying</Button></Link></div>

                        </div>
                    ) :
                        <div>
                            <p>No products</p>
                            <NavLink to="/" className="nav-enlace"> <Button>Home</Button></NavLink>
                        </div>
                    }
                </Card.Body>
            </Card>
        </div>


    )
}

export default Cart
