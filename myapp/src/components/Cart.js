import React from 'react';
import { Card } from 'react-bootstrap';
import { useListContext } from '../context/CartContext';

export default function Cart() {
    const { list, counter, clean } = useListContext();

    return <>
        <div>
            <Card border="dark" style={{ width: "55rem", margin: "3rem" }}>
                <Card.Header>Your shopping</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <ul>{list.map((item, index) =>
                            <li key={item.index}>
                                <strong>{item.name}</strong>
                                <span >Valor por unidad = $ {item.price}</span>
                                <strong >Cantidad: {item.count}</strong>
                                <strong >Total: $ {item.price * item.count}</strong>
                            </li>)}
                        </ul>
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    </>

}
