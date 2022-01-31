import React, { useState } from "react";
import "./ItemCount.css"

//components
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ItemCount = (props) => {

    const [counter, setCounter] = useState(1);
    const [stock, setStock] = useState(props.stock);


    const handlerCounterUp = () => {
        if (counter < stock) {
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
                    <Card.Text> <p>Cantidad disponible: {stock}</p> </Card.Text>
                    <Card.Text className="btnCounter">
                        <Button variant="dark" className="button" onClick={handlerCountDown} >-</Button>
                        <p>{counter}</p>
                        <Button variant="dark" className="button" onClick={handlerCounterUp} >+</Button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}


export default ItemCount;