import React, { useState } from "react";
import InputCreate from "./InputCreate";
import { useOrder } from "../hooks/useCollection";
import { Form } from "react-router-dom";
import { fromatPrice } from "../app/format";
import { useDispatch } from "react-redux";
import { ordersAddHistory } from "../app/cartSlice";

function CartModal({ products, totalPrice }) {
  const { sendOrder } = useOrder();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    sendOrder({
      name,
      phone,
      products,
      totalPrice,
    });
    // optionally clear or close modal
    setName("");
    setPhone("");
    dispatch(
      ordersAddHistory({
        name,
        phone,
        products,
        totalPrice,
      })
    );
    document.getElementById("order_modal")?.close(); // если используешь <dialog id="order_modal" />
  };

  return (
    <div className="modal-box">
      <div className="flex items-center gap-2 overflow-x-auto pb-4">
        {products.map((item) => (
          <figure className="size-16" key={item.id}>
            <img className="size-16 border" src={item.img} alt="" />
          </figure>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <InputCreate
          classInput="w-full"
          name="name"
          lebal="Ism Familya"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputCreate
          classInput="w-full"
          name="tel"
          lebal="Telefon raqam"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <div className="modal-action flex items-center justify-between">
          <div> Jami: {fromatPrice(totalPrice * 1000)} so'm</div>
          <button
            // onClick={() => )}
            type="submit"
            className="btn bg-amber-500 text-white"
          >
            Rasmilashtirish
          </button>
        </div>
      </form>
    </div>
  );
}

export default CartModal;
