import { Link } from "react-router-dom";
import "./Item.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"

const Item = (props) => {


  return (
    <div className="ItemCard">
      <Card border="dark" style={{ width: "18rem" }}>
        <Card.Header>{props.article}</Card.Header>
        <Card.Body>
          <Card.Img variant="top" src={props.imageUrl} />

          <Card.Text className="priceStyle"> $ {props.price} </Card.Text>

          <Card.Text className="stockStyle">
            {" "}
            <p>Quantity available: {props.stock}</p>{" "}
          </Card.Text>

          <div>
            {" "}
            <Link
              to={`/detail/${props.id}`}
              className="btnStyle"
              variant="primary"
            > <Button style={{ width: '16rem' }}>Detail</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
