import { useState } from 'react';
import "./ItemCount.css"
// import { useParams } from "react-router-dom";

// import items from "./utils/utils";

//components
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";

const ItemCount = ({ stock, initial, onAdd, addFail }) => {


    // const { itemId } = useParams();

    // const item = items.find((item) => item.id == itemId);

    const [counter, setCounter] = useState(initial);

    const handlerCounterUp = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }

    }


    const handlerCountDown = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    const AddCart = () => {
        if (counter <= stock) {
            onAdd(counter);
            setCounter(initial);
        }
        else {
            addFail();
        }
    }

    return (
        <div className='App-Counter'>
            <Card border="dark" style={{ width: '18rem' }}>
                <Card.Header>Build a cart</Card.Header>
                <Card.Body>
                    <Card.Title>Quantity</Card.Title>
                    {/* <Card.Text> <p>available quantity  {item.stock}</p> </Card.Text> */}
                    <Card.Text className="btnCounter">
                        <Button variant="dark" onClick={handlerCountDown}>-</Button>
                        <p>{counter}</p>
                        <Button variant="dark" onClick={handlerCounterUp} >+</Button>
                    </Card.Text>
                    <Link to={`/cart/${counter}`}>
                        <Button variant="primary" style={{ width: '16rem' }} conClick={AddCart}>Add!</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
}


export default ItemCount;