import React, { useEffect, useState } from "react";
import { useCollection } from "../hooks/useCollection";
import { fromatPrice } from "../app/index";
import { Link } from "react-router-dom";
import ChangeProductModal from "../components/ChangeProductModal";

function ChangeDataProduct() {
  let { data } = useCollection("products");
  let [idModal, setIdModal] = useState("");
  useEffect(() => {
    if (idModal) {
      const modal = document.getElementById("my_modal_3");
      if (modal) {
        modal.showModal();
      }
    }
  }, [idModal]);
  return (
    <div className="py-5">
      <div className="pb-6 md:pl-5">
        <Link to="/" className="text-xl link-error text-red-600">
          &lt; Assosiy
        </Link>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-2 items-center justify-center gap-10">
        {data &&
          data.map((item, id) => (
            <button
              key={item.id || id}
              className="card md:flex-row bg-base-100 w-full lg:h-full h-full md:p-5 p-2 pb-2 shadow-sm items-center md:gap-5 gap-2 hover:shadow-xl transition-shadow border-1 hover:border-amber-400"
              onClick={(e) => {
                e.preventDefault();
                setIdModal(""); // Сброс перед установкой
                setTimeout(() => setIdModal(item.id), 0); // Установка ID для модалки
              }}
            >
              <figure className="w-40">
                <img
                  src={item.img}
                  alt={item.name}
                  className="lg:size-28 size-16"
                />
              </figure>
              <div className="flex flex-col w-full gap-1 md:items-baseline items-center justify-center">
                <h2 className="car-title text-xl text-center">
                  {item.name}
                  {item.sale && (
                    <div className="badge bg-secondary-red text-white ml-2 text-xs">
                      Chegirma
                    </div>
                  )}
                </h2>
                <p className="text-sm opacity-80 text-center md:text-start">
                  * {item.description}
                </p>
                <div className="card-action w-full flex lg:flex-row flex-col text-sm gap-2 md:items-end items-center justify-end">
                  <div
                    className={`badg badg-outline ${
                      item.sale ? "line-through opacity-40 text-xs" : ""
                    }`}
                  >
                    {fromatPrice(item.price)} UZS
                  </div>
                  {item.sale && (
                    <div className="badg badg-outline text-red-600">
                      {fromatPrice(item.salePrice)} UZS
                    </div>
                  )}
                </div>
              </div>
            </button>
          ))}
      </div>

      {/* ЕДИНСТВЕННАЯ модалка */}
      {idModal && <ChangeProductModal id={idModal} data={data} />}
    </div>
  );
}

export default ChangeDataProduct;
