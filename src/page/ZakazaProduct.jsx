import { Link } from "react-router-dom";
import { useCollection, useDelete } from "../hooks/useCollection";
import { fromatPrice } from "../app/format";
import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebseConfig";

function ZakazaProduct() {
  let { data } = useCollection("orders");
  const [modalData, setModalData] = useState(null);
  const { deleteProduct } = useDelete(); // ✅ Хук удаления

  const handleStatusChange = async (newStatus) => {
    if (!modalData) return;
    const orderRef = doc(db, "orders", modalData.id);
    await updateDoc(orderRef, { status: newStatus });

    // Обновляем только статус в UI
    setModalData((prev) => ({ ...prev, status: newStatus }));
  };

  return (
    <div className="py-5">
      <div className="pb-6 md:pl-5">
        <Link to="/" className="text-xl link-error text-red-600">
          &lt; Assosiy
        </Link>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center gap-4">
        {data &&
          data.map((item) => (
            <button
              key={item.id}
              onClick={() => setModalData(item)}
              className={`card bg-base-200 rounded-2xl py-5 w-full shadow-sm border-2
               ${item.status === "Yangi" && "border-red-600"}
               ${item.status === "Bog'landik" && "border-yellow-600"}
               ${item.status === "Yuborildi" && "border-green-600"}
               ${item.status === "Bekor qilindi" && "border-gray-700"}
              `}
            >
              <figure className="flex pl-5 items-start w-full justify-start gap-5 flex-wrap">
                {item.products.map((img) => (
                  <div className="relative" key={img.id}>
                    <img
                      className="md:size-16 size-10 border"
                      src={img.img}
                      alt=""
                    />
                    <span className="absolute z-10 bottom-0 right-0 text-xs">
                      {img.amoutCart}x
                    </span>
                  </div>
                ))}
              </figure>
              <div className="md:text-sm text-xs flex flex-col gap-1 px-5 pt-2">
                <div className="flex items-center text-base gap-2 flex-wrap">
                  <h2 className="card-title">{item.name}</h2>
                  <p className="text-sm">({item.phone})</p>
                </div>
                <div className="flex justify-between flex-wrap gap-2">
                  <div className="badge badge-outline">
                    {fromatPrice(item.totalPrice * 1000)}
                  </div>
                  <div
                    className={`badge badge-outline text-white 
                      ${item.status === "Yangi" && "bg-red-500"}
                      ${item.status === "Bog'landik" && "bg-amber-500"}
                      ${item.status === "Yuborildi" && "bg-green-500"}
                      ${item.status === "Bekor qilindi" && "bg-gray-800"}
                    `}
                  >
                    {item.status}
                  </div>
                </div>
              </div>
            </button>
          ))}
      </div>

      {/* Modal */}
      {modalData && (
        <dialog id="order_modal" className="modal modal-open">
          <div className="modal-box max-w-2xl">
            <h3 className="font-bold text-lg mb-2">
              Buyurtmachi: {modalData.name}
            </h3>
            <p className="mb-2">Telefon: {modalData.phone}</p>

            <div className="mb-4 flex flex-wrap gap-2">
              {modalData.products.map((item, i) => (
                <div
                  key={i}
                  className="relative border rounded-md p-2 flex flex-col items-center w-24"
                >
                  <img
                    src={item.img}
                    className="w-16 h-16 object-cover"
                    alt=""
                  />
                  <p className="text-xs text-center mt-1">{item.name}</p>
                  <span className="absolute z-10 top-0 right-0 text-xs">
                    {item.amoutCart}x
                  </span>
                </div>
              ))}
            </div>

            <p className="mb-4 font-semibold">
              Umumiy narx: {fromatPrice(modalData.totalPrice * 1000)} so'm
            </p>

            <div className="flex gap-2 mb-4 flex-wrap">
              {["Yangi", "Bog'landik", "Yuborildi", "Bekor qilindi"].map(
                (status) => (
                  <button
                    key={status}
                    onClick={() => handleStatusChange(status)}
                    className={`btn btn-sm ${
                      modalData.status === status ? "btn-info" : "btn-outline"
                    }`}
                  >
                    {status}
                  </button>
                )
              )}
            </div>

            <div className="modal-action">
              <button
                className="btn btn-error"
                onClick={() => {
                  deleteProduct(modalData.id, "orders");
                  setModalData(null);
                }}
              >
                O‘chirish
              </button>
              <button onClick={() => setModalData(null)} className="btn">
                Yopish
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}

export default ZakazaProduct;
