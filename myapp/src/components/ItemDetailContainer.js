import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({ itemToItemDetail }) => {

    const [itemdetail, setitemdetail] = useState();

    const setDetails = () => {
        setitemdetail(itemToItemDetail)
    }

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const promiseItems = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(itemdetail)
            }, 2000)
        })
        promiseItems
            .then((res) => {
                setDetails(res);
                console.log(itemdetail);
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
            {loading ? <h1> loading detail... </h1> : <ItemDetail itemToItemDetail={itemToItemDetail} />}
        </>
    )
}
export default ItemDetailContainer;