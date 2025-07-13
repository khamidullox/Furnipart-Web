import React from "react";
import { Link } from "react-router-dom";

function CartNull() {
  return (
    <div className=" my-16 place-content-center w-full flex flex-col gap-6 p-16 text-center glass rounded-4xl text-xl">
      <h1>Savata mahsulot yo'q</h1>
      <Link to="/" className="text-lg link">
        Mahsulotlardi korish
      </Link>
    </div>
  );
}

export default CartNull;
