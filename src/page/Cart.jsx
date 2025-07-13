import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fromatPrice } from "../app/format";
import {
  OrdersHistory,
  CartMobileRes,
  CartModal,
  CartDesktopRes,
  CartNull,
} from "../components";

function Cart() {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.cart);

  const totalCount = product.reduce(
    (sum, item) => sum + Number(item.amoutCart || 0),
    0
  );
  
  const totalPrice = product.reduce((sum, item) => {
    const price = item.sale
      ? fromatPrice(item.salePrice)
      : fromatPrice(item.price);
    return sum + price * (item.amoutCart || 1);
  }, 0);
  

  return (
    <div className="py-8 px-2 md:px-8 ">
      {product.length !== 0 ? (
        <>
          <CartDesktopRes
            product={product}
            totalPrice={totalPrice}
            totalCount={totalCount}
          />
          <CartMobileRes
            product={product}
            totalPrice={totalPrice}
            totalCount={totalCount}
          />
          <div className=" w-full flex items-end justify-end mt-5">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <>
              <button
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
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
        </>
      ) : (
        <CartNull />
      )}

      <OrdersHistory />
    </div>
  );
}

export default Cart;
