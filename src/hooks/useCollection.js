import { useState, useEffect } from "react";
import {
  collection,
  query,
  where,
  deleteDoc,
  onSnapshot,
  orderBy,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { doc, updateDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { showLoading } from "react-global-loading";
import { db } from "../firebase/firebseConfig";
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
        setData(data.reverse());
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
      console.log(6);
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
export const useUpdate = () => {
  const updateProduct = async (id, updatedData) => {
    if (!id) return;

    try {
      showLoading(true);
      const productRef = doc(db, "products", id);

      await updateDoc(productRef, {
        ...updatedData,
        updatedAt: new Date(),
      });

      toast.success(`Mahsulot "${updatedData.name}" yangilandi`);
    } catch (error) {
      toast.error("Xatolik yuz berdi: " + error.message);
    } finally {
      showLoading(false);
    }
  };

  return { updateProduct };
};

export const useDelete = () => {
  const deleteProduct = async (id, collection = "products") => {
    try {
      await deleteDoc(doc(db, collection, id));
      toast.success("Mahsulot o‘chirildi");
    } catch (error) {
      toast.error("O‘chirishda xatolik yuz berdi");
      console.error(error);
    }
  };

  return { deleteProduct };
};
export const useOrder = () => {
  const sendOrder = async ({ name, phone, products, totalPrice }) => {
    if (!name || !phone || products.length === 0) {
      toast.error("Iltimos, barcha maydonlarni to‘ldiring");
      return;
    }

    try {
      showLoading(true);
      await addDoc(collection(db, "orders"), {
        name,
        phone,
        products,
        totalPrice,
        createAt: serverTimestamp(),
        status: "Yangi",
      });
      toast.success("Buyurtma yuborildi!");
    } catch (error) {
      toast.error("Xatolik: " + error.message);
    } finally {
      showLoading(false);
    }
  };

  return { sendOrder };
};
