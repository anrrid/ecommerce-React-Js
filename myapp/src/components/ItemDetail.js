import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import ItemCount from "./ItemCount"
import { CartContext } from "../context/CartContext"
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useContexto } from "../context/CartContext";


const ItemDetail = ({ item }) => {


  const { addToCart } = useContexto();

  const [confirm, setConfirm] = useState(false);
  const [amount, setAmount] = useState(0);


  const onAdd = (accountant) => {

    addToCart(accountant, item);
    alert('Item to cart: ' + accountant);
    setAmount(accountant)
    setConfirm(true);
  };

  const onAddFail = () => {
    alert('Not enough stock')
  };

  return (
    <div className="ItemCard">
      <Card border="dark" style={{ width: "25rem" }}>
        <Card.Header>{item.article}</Card.Header>
        <Card.Body>
          <Card.Img variant="top" src={item.imageUrl} />

          <Card.Text className="priceStyle"> $ {item.price} </Card.Text>

          <Card.Text className="stockStyle">
            {" "}
            <p>available quantity  {10}</p>{" "}
          </Card.Text>
          <Card.Text><p>{item.description}</p></Card.Text>
          {confirm ? <Link
            to={"/cart"}
          > <Button style={{ width: '16rem' }}>Finish</Button>
          </Link> : <ItemCount stock={10} initial={1} onAdd={onAdd} addFail={onAddFail} />}
        </Card.Body>
      </Card>
    </div>

  );
};

export default ItemDetail;
