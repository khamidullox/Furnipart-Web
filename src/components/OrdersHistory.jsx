import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fromatPrice } from "../app/format";

function OrdersHistory() {
  const dispatch = useDispatch();
  const ordersProducts = useSelector((state) => state.cart.ordersProduct);
  console.log(ordersProducts);
  return (
    <>
      <h3 className="pl-5 ">Buyurtmalar</h3>
      <div className="grid md:grid-cols-3 grid-cols-2 items-center justify-center gap-10">
        {ordersProducts.map((item, ID) => {
          return (
            <div
              key={ID}
              className="ard bg-bas-200 rounded-2xl glass py-5 w-full shadow-sm"
            >
              <figure className="flex pl-5 items- w-full justify-start gap-5 flex-wrap             ">
                {item.products.map((img) => {
                  return (
                    <img className="md:size-16 size-10" src={img.img} alt="" />
                  );
                })}
              </figure>
              <div className=" md:text-sm text-xs flex flex-col gap-1 px-5 pt-2">
                <div className=" flex items-center gap-2">
                  <h2 className="card-titl">{item.name}</h2>
                  <p>({item.phone})</p>
                </div>
                <div className="">
                  <div className="badge badge-outline">
                    {fromatPrice(item.totalPrice * 1000)} so'm
                  </div>
                  {/* <div className="badge badge-outline"></div> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default OrdersHistory;
