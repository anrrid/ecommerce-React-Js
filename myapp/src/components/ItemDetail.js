import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount"


import items from "./utils/utils";

const ItemDetail = ({ }) => {
  const { itemId } = useParams();

  const item = items.find((item) => item.id == itemId);

  return (
    <div className="ItemCard">
      <Card border="dark" style={{ width: "25rem" }}>
        <Card.Header>{item.article}</Card.Header>
        <Card.Body>
          <Card.Img variant="top" src={item.imageUrl} />

          <Card.Text className="priceStyle"> $ {item.price} </Card.Text>

          <Card.Text className="stockStyle">
            {" "}
            <p>available quantity  {item.stock}</p>{" "}
          </Card.Text>
          <Card.Text><p>{item.description}</p></Card.Text>
          <ItemCount />
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetail;
