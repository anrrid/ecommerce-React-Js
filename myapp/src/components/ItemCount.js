import React from 'react';
import { useListContext } from '../context/CartContext';
import "./ItemCount.css"
// import { useParams } from "react-router-dom";

// import items from "./utils/utils";

//components
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";

const ItemCount = ({ onAdd }) => {

    const { handlerCounterUp, handlerCountDown, counter, onCountChange } = useListContext();

    // const { itemId } = useParams();

    // const item = items.find((item) => item.id == itemId);

    // const [counter, setCounter] = useState(1);

    // const handlerCounterUp = () => {
    //     if (counter < item.stock) {
    //         setCounter(counter + 1);
    //     }

    // }


    // const handlerCountDown = () => {
    //     if (counter > 0) {
    //         setCounter(counter - 1);
    //     }
    // }

    return (
        <div className='App-Counter'>
            <Card border="dark" style={{ width: '18rem' }}>
                <Card.Header>Build a cart</Card.Header>
                <Card.Body>
                    <Card.Title>Quantity</Card.Title>
                    {/* <Card.Text> <p>available quantity  {item.stock}</p> </Card.Text> */}
                    <Card.Text> <h3 value={counter} onChange={onCountChange}>{counter}</h3></Card.Text>
                    <Card.Text className="btnCounter">
                        <Button variant="dark" onClick={handlerCountDown}>-</Button>
                        <p>{counter}</p>
                        <Button variant="dark" onClick={handlerCounterUp} >+</Button>
                    </Card.Text>
                    <Link to={`/cart/${counter}`}>
                        <Button variant="primary" style={{ width: '16rem' }} conClick={onAdd}>Add {counter}!</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
}


export default ItemCount;