import React from "react";
import InputCreate from "./InputCreate";
import { Form } from "react-router-dom";

function CartModal({ products }) {
  console.log(products);
  return (
    <>
      {" "}
      <div className="modal-box">
        <div className="flex items-center gap-2">
          {" "}
          {products.map((item) => {
            return (
              <figure className="size-16" key={item.id}>
                {" "}
                <img className="size-16 border" src={item.img} alt="" />
              </figure>
            );
          })}
        </div>
        <Form method="post">
          <InputCreate
            classInput="w-full"
            name="Ism"
            lebal="Ism Familya"
            type="text"
          />
          <InputCreate
            classInput="w-full"
            name="tel"
            lebal="Telefon Nomer"
            type="number"
          />
        </Form>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn bg-amber-500 text-white">
              Rasmilashtirish
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CartModal;
