import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
// import items from "./utils/utils";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebaseConfig";
import { getDocs, query, collection, where } from "firebase/firestore";

const ItemListContainer = () => {

  const [itemList, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    const productsCollection = collection(db, "products");

    if (itemId) {
      const queriesItem = query(productsCollection, where("category", "==", itemId));
      getDocs(queriesItem)
        .then(({ docs }) => {
          setItems(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      getDocs(productsCollection)
        .then(({ docs }) => {
          const parsedResult = [];
          docs.forEach((documento) => {
            const id = documento.id;
            const data = documento.data();
            const data_final = { id, ...data };
            parsedResult.push(data_final);
          });

          setItems(parsedResult);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [itemId]);

  // useEffect(() => {
  //   const promiseItems = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(items);
  //     }, 2000);
  //   });
  //   promiseItems
  //     .then((res) => {
  //       setItems(res);
  //       console.log(itemList);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

  return <>{loading ? <h1> loading... </h1> : <ItemList items={itemList} />}</>;
};
export default ItemListContainer;


// if (itemId) {
//   resolve(items.filter(itemList => itemList.category == itemId));
//   setLoading(false);
// } else {
//   resolve(items)
//   setLoading(false)
// }