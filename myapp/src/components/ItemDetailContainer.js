import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";


const ItemDetailContainer = () => {

    const { itemId } = useParams();

    const [itemdetail, setitemdetail] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const productsCollection = collection(db, "products");
        const refDoc = doc(productsCollection, itemId);
        getDoc(refDoc)
            .then((result) => {
                setitemdetail({ id: result.itemId, ...result.data() });
                setLoading(false);

            })
            .catch((error) => {

            })
    }, [itemId])

    // const getDetails = () => {
    //     const promiseItems = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             console.log(itemId)
    //             resolve(items.find((item) => item.id === Number(itemId)));
    //             setLoading(false);
    //         }, 2000);
    //     })
    //     promiseItems.then((item) => {
    //         console.log(item);
    //         setitemdetail(item);
    //     });
    // }

    // useEffect(() => {
    //     getDetails()
    // }, [itemId])

    return (
        <>
            {loading ? <h1> loading detail... </h1> : <ItemDetail item={itemdetail} />}
        </>
    )

}
export default ItemDetailContainer;