import React, { useEffect, useState } from "react";
import { fromatPrice } from "../app/index";

function ChangeProductModal({ data, id }) {
  const filtered = data?.filter((item) => item.id === id);

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <div>
          {" "}
          {filtered.map((item) => (
            <div
              key={item.id}
              className="card md:flex-row bg-base-100 w-full h-full md:p-5 p-2 pb-2 shadow-sm items-center md:gap-5 gap-2"
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
            </div>
          ))}
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-info">Jonatish</button>
          </form>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default ChangeProductModal;
