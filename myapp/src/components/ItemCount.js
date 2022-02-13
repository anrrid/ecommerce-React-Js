import React, { useState } from "react";
import "./ItemCount.css"
import { useParams } from "react-router-dom";

import items from "./utils/utils";

//components
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";

const ItemCount = (props) => {
    const { itemId } = useParams();
    // const { totalStock } = useParams();

    const item = items.find((item) => item.id == itemId);
    // const stock = items.filter((item) => item.stock == totalStock)

    const [counter, setCounter] = useState(1);
    // const [stock, setStock] = useState(props.stock);
    console.log(itemId)
    console.log(item.stock)

    const handlerCounterUp = () => {
        if (counter < item.stock) {
            setCounter(counter + 1);
        }

    }


    const handlerCountDown = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }

    return (
        <div className='App-Counter'>
            <Card border="dark" style={{ width: '18rem' }}>
                <Card.Header>Build a cart</Card.Header>
                <Card.Body>
                    <Card.Title>Item</Card.Title>
                    <Card.Text> <p>available quantity  {item.stock}</p> </Card.Text>
                    <Card.Text className="btnCounter">
                        <Button variant="dark" onClick={handlerCountDown} >-</Button>
                        <p>{counter}</p>
                        <Button variant="dark" onClick={handlerCounterUp} >+</Button>
                    </Card.Text>
                    <Link to={`/cart/${counter}`}>
                        <Button variant="primary" style={{ width: '16rem' }} >Buy!</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
}


export default ItemCount;