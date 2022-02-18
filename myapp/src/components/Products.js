import React from 'react';
import Button from 'react-bootstrap/Button'

export const Products = ({ item, addItems }) => {
    return (
        <div>
            <h4>
                {item.name} - quantity: {item.quantity}
            </h4>
            <div>
                <Button variant="outline-primary" style={{ width: 'inherit' }} onClick={() => addItems(item.id)}>Add</Button>
                {/* <Button variant="outline-warning" style={{ width: 'inherit' }} onClick={() => deleteCandidate(item.id)}>Clear</Button> */}
            </div>
        </div>
    );
};
