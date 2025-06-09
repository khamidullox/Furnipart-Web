import { useState, useEffect } from "react";
import {
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase/firebseConfig";
import { showLoading } from "react-global-loading";
import toast from "react-hot-toast";
export let useCollection = (collectionName) => {
  let [data, setData] = useState(null);

  useEffect(() => {
    if (collectionName) {
      const q = query(
        collection(db, collectionName),
        // where(...whereData),
        orderBy("createAt")
      );
      onSnapshot(q, (querySnapshot) => {
        let data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setData(data);
      });
    }
  }, [collectionName]);
  return { data };
};

export let useCreate = () => {
  let createProduct = (newData) => {
    if (
      !(newData.name == "") &&
      !(newData.description == "") &&
      !(newData.img == "") &&
      !(newData.price == "")
    ) {
      showLoading(true);
      addDoc(collection(db, "products"), {
        ...newData,
        createAt: serverTimestamp(),
      }).then(() => {
        toast.success(` Yangi mahsulot  ${newData.name} qoshildi `, {});
        showLoading(false);
        // navigate("/");
      });
    }
  };

  return { createProduct };
};
