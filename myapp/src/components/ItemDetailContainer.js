import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";


const ItemDetailContainer = () => {

    const { id } = useParams();

    const [itemdetail, setitemdetail] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const productsCollection = collection(db, "products");
        const refDoc = doc(productsCollection, id);
        getDoc(refDoc)
            .then((result) => {
                setitemdetail({ id: result.id, ...result.data() });
                setLoading(false);

            })
            .catch((error) => {
                console.warn(error);
            })
    }, [id])


    return (
        <>
            {loading ? <h1> loading detail... </h1> : <ItemDetail item={itemdetail} />}
        </>
    )

}
export default ItemDetailContainer;