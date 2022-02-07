import React, { useState } from 'react';



const ItemDetail = ({ itemToItemDetail }) => {
    const [itemdetail, setitemdetail] = useState([]);

    return (
        <div>
            {itemToItemDetail}
        </div>
    );
}


export default ItemDetail;