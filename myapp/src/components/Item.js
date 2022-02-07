import React, { useState } from "react";
import "./Item.css"
import ItemDetail from "./ItemDetail"

//CARD
import Card from 'react-bootstrap/Card'
import { Button } from "react-bootstrap";


const Item = (props) => {

    const [data, setData] = useState('');

    const itemToItemDetail = () => {
        setData("prueba")
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
                        <ItemDetail itemToItemDetail={data} />
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}


export default Item;