import React, { useEffect, useState } from 'react';
import ItemList from "./ItemList";
import items from "./utils/utils"


const ItemListContainer = () => {

    const [itemList, setItems] = useState([]);

    useEffect(() => {
        const promiseItems = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(items)
            }, 2000)
        })
        promiseItems
            .then((res) => {
                setItems(res);
                console.log(itemList);
            })
            .catch((error) => {
                //console.log(error)
            })
    }, [itemList]);

    return (
        <>
            <ItemList items={itemList} />
        </>
    )
}

export default ItemListContainer;