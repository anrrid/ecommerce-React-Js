import React, { useState } from "react";
import "./Item.css"
import ItemDetailContainer from "./ItemDetail"
import { Link } from 'react-router-dom';

//CARD
import Card from 'react-bootstrap/Card'


const Item = (props) => {

    const [data, setData] = useState('');

    const itemToItemDetail = () => {
        setData(props)
    }

    const [render, setRender] = useState(false)

    // const handleClick = () => {
    //     itemToItemDetail()
    //     setRender(render => !render);
    // }
    return (
        <div className='ItemCard'>
            <Card border="dark" style={{ width: '18rem' }}>

                <Card.Header>{props.article}</Card.Header>
                <Card.Body>

                    <Card.Img variant="top" src={props.imageUrl} />

                    <Card.Text className="priceStyle"> $ {props.price} </Card.Text>

                    <Card.Text className="stockStyle"> <p>Cantidad disponible: {props.stock}</p> </Card.Text>

                    <div> <Link to="/detail/" className="btnStyle" variant="primary">Detalle</Link></div>
                    {render &&

                        <ItemDetailContainer itemToItemDetail={data} />

                    }

                </Card.Body>
            </Card>
        </div>
    )
}


export default Item;