import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
} from "../app/cartSlice";
import { fromatPrice } from "../app/format";
import { useDispatch } from "react-redux";

function CartMobileRes({ product, totalCount, totalPrice }) {
  const dispatch = useDispatch();

  return (
    <div className="md:hidden text-sm flex flex-col gap-4 relative">
      {product.map((item) => (
        <Link
          to={`/product/${item.id}`}
          key={item.id}
          className="glass p-3 rounded-xl flex flex-col gap-2 relative"
        >
          <div className="flex items-center gap-3">
            <img
              src={item.img}
              alt={item.name}
              className="w-16 h-16 rounded-md"
            />
            <div>
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          </div>
          <div className="flex justify-between text-sm">
            {/* <span>ID: {item.idP}</span> */}
            <span className="capitalize badge-dash badge">{item.category}</span>
          </div>
          <div className="flex flex-col gap-1 font-medium">
            <span>Narxi: {item.sale ? item.salePrice : item.price} UZS</span>
            <div className="flex items-center text-base gap-2 mt-1">
              <span>Soni:</span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  dispatch(decreaseQuantity(item.id));
                }}
                className="px-2 py-1 bg-base-300 rounded-full"
              >
                -
              </button>
              <span>{item.amoutCart}</span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  dispatch(increaseQuantity(item.id));
                }}
                className="px-2 py-1 bg-base-300 rounded-full"
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              dispatch(deleteProduct(item.id));
            }}
            className="btn btn-error p-0 rounded-full z-50 pl-2 top-1 right-1 text-center absolute"
          >
            <MdDeleteOutline className="text-xl mr-2" />
          </button>
        </Link>
      ))}
      <div className="text-right mt-4 font-semibold text-base">
        <p>Jami mahsulot: {totalCount} ta</p>
        <p> Jami: {fromatPrice(totalPrice * 1000)} so'm</p>
      </div>
    </div>
  );
}

export default CartMobileRes;
