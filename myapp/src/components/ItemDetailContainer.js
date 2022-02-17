import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import items from "./utils/utils";

const ItemDetailContainer = () => {

    const { itemId } = useParams();

    const [itemdetail, setitemdetail] = useState({});
    const [loading, setLoading] = useState(true);

    const getDetails = () => {
        const promiseItems = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(itemId)
                resolve(items.find((item) => item.id === Number(itemId)));
                setLoading(false);
            }, 2000);
        })
        promiseItems.then((item) => {
            console.log(item);
            setitemdetail(item);
        });
    }

    useEffect(() => {
        getDetails()
    }, [itemId])

    return (
        <>
            {loading ? <h1> loading detail... </h1> : <ItemDetail item={itemdetail} />}
        </>
    )

}
export default ItemDetailContainer;