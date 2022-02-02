import "./Item.css"

//components
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Item = (props) => {

    return (
        <div className='ItemCard'>
            <Card border="dark" style={{ width: '18rem' }}>

                <Card.Header>{props.article}</Card.Header>
                <Card.Body>

                    <Card.Img variant="top" src={props.imageUrl} />

                    <Card.Text className="priceStyle"> $ {props.price} </Card.Text>

                    <Card.Text className="stockStyle"> <p>Cantidad disponible: {props.stock}</p> </Card.Text>
                    <Button className="btnStyle" variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
}


export default Item;