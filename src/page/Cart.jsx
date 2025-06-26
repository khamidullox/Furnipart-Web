import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdDeleteOutline } from "react-icons/md";
import { deleteProduct } from "../app/cartSlice"; // Убедись в правильности пути
import { Link } from "react-router-dom";
import { fromatPrice } from "../app/format";
import CartModal from "../components/CartModal";
import OrdersHistory from "../components/OrdersHistory";

function Cart() {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.cart);

  const totalCount = product.reduce(
    (sum, item) => sum + Number(item.amoutProduct || 0),
    0
  );

  const totalPrice = product.reduce((sum, item) => {
    const price = item.sale
      ? fromatPrice(item.salePrice)
      : fromatPrice(item.price);
    return sum + price * (item.amoutProduct || 1);
  }, 0);

  return (
    <div className="py-8 px-2 md:px-8 ">
      {/* 💻 Desktop Table */}
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
                <td>{item.amoutProduct}</td>
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

      {/* 📱 Mobile Cards */}
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
              <span className="capitalize badge-dash badge">
                {item.category}
              </span>
            </div>
            <div className="flex justify-between items-center font-medium">
              <span>Narxi: {item.sale ? item.salePrice : item.price} UZS</span>
              <span>Soni: {item.amoutProduct}</span>
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

      <div className=" w-full flex items-end justify-end mt-5">
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <>
          <button
            onClick={() => document.getElementById("my_modal_1").showModal()}
            className="btn btn-info"
          >
            Buyurtma berish{" "}
          </button>
        </>
        <dialog id="my_modal_1" className="modal">
          <CartModal products={product} totalPrice={totalPrice} />
          <form method="dialog" className="modal-backdrop">
            <button>Yopish</button>
          </form>
        </dialog>
      </div>

      <OrdersHistory />
    </div>
  );
}

export default Cart;
