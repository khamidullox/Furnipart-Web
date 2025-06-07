import { useState, useEffect } from "react";
import {
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
} from "firebase/firestore";

import { db } from "../firebase/firebseConfig";
export let useCollection = (collectionName) => {
  let [data, setData] = useState(null);

  useEffect(() => {
    if (collectionName) {
      const q = query(
        collection(db, collectionName)
        // where(...whereData),
        // orderBy(...orderData)
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
