import React, { useEffect, useState } from 'react';
import ItemDetail from "./ItemDetail"
import items from "./utils/utils"


const ItemDetailContainer = () => {

    const [ItemDetail, setItemDetail] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const promiseItems = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(items)
            }, 2000)
        })
        promiseItems
            .then((res) => {
                setItemDetail(res);
                console.log(ItemDetail);
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false);
            })
    }, [ItemDetail]);
    return (
        <>
            {loading ? <h1> loading detail... </h1> : <ItemDetail />}
        </>
    )
}
export default ItemDetailContainer;