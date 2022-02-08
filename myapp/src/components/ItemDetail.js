import React, { useState } from 'react';



const ItemDetail = ({ itemToItemDetail }) => {
    const [itemdetail, setitemdetail] = useState();


    const setDetails = () => {
        setitemdetail(itemToItemDetail)
    }

    return (
        <div>
            <p>{itemToItemDetail.price}</p>
        </div>
    );
}


export default ItemDetail;