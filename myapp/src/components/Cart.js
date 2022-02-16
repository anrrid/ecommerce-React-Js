import { useContext } from "react";
import { Card } from "react-bootstrap";
import { ItemsContext } from "./ItemsContext";
import { Products } from "./Products";


export const Cart = () => {
    const { items, addItems } = useContext(ItemsContext);

    const data = useContext(ItemsContext);

    return (
        <div>
            <Card border="dark" style={{ width: "55rem", margin: "3rem" }}>
                <Card.Header>Cart</Card.Header>
                <Card.Body>
                    {items.map((item, index) => {
                        return (
                            <Products
                                key={index}
                                item={item}
                                addItems={addItems}
                            />
                        )
                    })}
                </Card.Body>
            </Card>
        </div>

    )
}

export default Cart;