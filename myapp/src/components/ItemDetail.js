import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'

const ItemDetail = ({ itemToItemDetail }) => {
    const [itemdetail, setitemdetail] = useState();


    const setDetails = () => {
        setitemdetail(itemToItemDetail)
    }

    return (
        <div className='ItemCard'>
            <Card border="dark" style={{ width: '18rem' }}>

                <Card.Header>{itemToItemDetail.article}</Card.Header>
                <Card.Body>

                    <Card.Img variant="top" src={itemToItemDetail.imageUrl} />

                    <Card.Text className="priceStyle"> $ {itemToItemDetail.price} </Card.Text>

                    <Card.Text className="stockStyle"> <p>Cantidad disponible: {itemToItemDetail.stock}</p> </Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
}


export default ItemDetail;