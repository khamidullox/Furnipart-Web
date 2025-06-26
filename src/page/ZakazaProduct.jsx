import { Link } from "react-router-dom";
import { useCollection } from "../hooks/useCollection";
import { fromatPrice } from "../app/format";
import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebseConfig";

function ZakazaProduct() {
  let { data } = useCollection("orders");
  const [modalData, setModalData] = useState(null);

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

      <div className="grid md:grid-cols-3 grid-cols-2 items-center justify-center gap-10">
        {data &&
          data.map((item) => (
            <button
              key={item.id}
              onClick={() => setModalData(item)}
              className="card bg-base-200 rounded-2xl glass py-5 w-full shadow-sm"
            >
              <figure className="flex pl-5 items-start w-full justify-start gap-5 flex-wrap">
                {item.products.map((img) => (
                  <img
                    key={img.id}
                    className="md:size-16 size-10 border"
                    src={img.img}
                    alt=""
                  />
                ))}
              </figure>
              <div className="md:text-sm text-xs flex flex-col gap-1 px-5 pt-2">
                <div className="flex items-center gap-2">
                  <h2 className="card-title">{item.name}</h2>
                  <p>({item.phone})</p>
                </div>
                <div className="flex justify-between">
                  <div className="badge badge-outline">
                    {fromatPrice(item.totalPrice * 1000)} so'm
                  </div>
                  <div
                    className={`badge badge-outline 
                      ${item.status == "Yangi" && "bg-red-500"}
                    ${item.status == "Bog'landik" && "bg-amber-500"}
                     ${item.status == "Yuborildi" && "bg-green-500"}
                      ${item.status == "Bekor qilindi" && "bg-gray-800"}
                      text-white`}
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
        <dialog id="order_modal" className="modal modal-open" scroll="no">
          <div className="modal-box max-w-2xl">
            <h3 className="font-bold text-lg mb-2">
              Buyurtmachi: {modalData.name}
            </h3>
            <p className="mb-2">Telefon: {modalData.phone}</p>

            <div className="mb-4 flex flex-wrap gap-2">
              {modalData.products.map((item, i) => (
                <div
                  key={i}
                  className="border rounded-md p-2 flex flex-col items-center w-24"
                >
                  <img
                    src={item.img}
                    className="w-16 h-16 object-cover"
                    alt=""
                  />
                  <p className="text-xs text-center mt-1">{item.name}</p>
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
