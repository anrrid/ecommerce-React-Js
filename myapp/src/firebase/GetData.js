import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from "firebase/firestore";



const GetData = () => {
  const [data, setData] = useState([])
}

const q = query(collection(db, "products"), where("article", "==", true));
const docs = [];
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});