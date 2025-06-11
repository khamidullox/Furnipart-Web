import React from "react";
import { PageSingleCard } from "../components";

function ModalCreate({ dataProduct }) {
  return (
    <>
      <button
        className="btn btn-info w-full"
        onClick={(e) => {
          document.getElementById("my_modal_1").showModal();
          e.preventDefault();
        }}
      >
        Kartochka
      </button>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <PageSingleCard item={dataProduct} />
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-primary">Qaytish</button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default ModalCreate;
