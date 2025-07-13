import React from "react";
import { decreaseQuantity, increaseQuantity } from "../app/cartSlice";
import { useDispatch } from "react-redux";
import { fromatPrice } from "../app/format";
import { MdDeleteOutline } from "react-icons/md";

function CartDesktopRes({ product, totalCount, totalPrice }) {
  const dispatch = useDispatch();

  return (
    <div className="overflow-x-auto glass rounded-2xl p-1 md:block hidden">
      <table className="table md:text-sm text-xs">
        <thead>
          <tr>
            <th>Nomi</th>
            <th>Mahsulot</th>
            <th>Narxi</th>
            <th>Soni</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {product.map((item) => (
            <tr key={item.id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask  h-12 w-12">
                      <img src={item.img} alt={item.name} />
                    </div>
                  </div>
                  <div className="">
                    <div className="font-bold">{item.name}</div>
                    <div className="text-sm opacity-50">{item.idP}</div>
                  </div>
                </div>
              </td>
              <td>
                {item.description}
                <br />
                <span className="badge badge-ghost badge-sm capitalize">
                  {item.category}
                </span>
              </td>
              <td>{item.sale ? item.salePrice : item.price} UZS</td>
              <td className="flex items-center pt-7 gap-2">
                <button
                  className="p-0.5 px-2 bg-base-300 cursor-pointer rounded-full justify-start text-center"
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                >
                  -
                </button>
                {item.amoutCart}
                <button
                  className="p-0.5 px-2 cursor-pointer bg-base-300 rounded-full text-center"
                  onClick={() => dispatch(increaseQuantity(item.id))}
                >
                  +
                </button>
              </td>

              <td>
                <button
                  className="btn btn-error p-2"
                  onClick={() => dispatch(deleteProduct(item.id))}
                >
                  <MdDeleteOutline className="text-2xl" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th></th>
            <th className="text-base font-semibold">
              Jami: {fromatPrice(totalPrice * 1000)} so'm
            </th>
            <th className="text-base font-semibold">Soni: {totalCount}</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default CartDesktopRes;
