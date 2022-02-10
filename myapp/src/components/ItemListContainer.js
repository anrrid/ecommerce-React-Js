import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import items from "./utils/utils";

const ItemListContainer = () => {
  const [itemList, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const promiseItems = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(items);
      }, 2000);
    });
    promiseItems
      .then((res) => {
        setItems(res);
        console.log(itemList);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return <>{loading ? <h1> loading... </h1> : <ItemList items={itemList} />}</>;
};
export default ItemListContainer;
