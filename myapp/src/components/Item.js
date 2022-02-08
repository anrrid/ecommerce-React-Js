import React, { useState } from "react";
import "./Item.css"

//CARD
import Card from 'react-bootstrap/Card'
import { Button } from "react-bootstrap";
import ItemDetailContainer from "./ItemDetailContainer";


const Item = (props) => {

    const [data, setData] = useState('');

    const itemToItemDetail = () => {
        setData(props)
    }

    return (
        <div className='ItemCard'>
            <Card border="dark" style={{ width: '18rem' }}>

                <Card.Header>{props.article}</Card.Header>
                <Card.Body>

                    <Card.Img variant="top" src={props.imageUrl} />

                    <Card.Text className="priceStyle"> $ {props.price} </Card.Text>

                    <Card.Text className="stockStyle"> <p>Cantidad disponible: {props.stock}</p> </Card.Text>

                    <div> <Button className="btnStyle" variant="primary" onClick={() => itemToItemDetail()}>Detalle</Button></div>

                    <div>
                        <ItemDetailContainer itemToItemDetail={data} />
                    </div>
                </Card.Body>
            </Card>;
        </div>
    )
}


export default Item;