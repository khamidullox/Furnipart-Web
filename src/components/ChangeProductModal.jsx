import React, { useState, useEffect } from "react";
import InputCreate from "./InputCreate";
import { useUpdate } from "../hooks/useCollection";

function ChangeProductModal({ data, id, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    img: "",
    price: "",
    idP: "",
    sale: false,
    salePrice: "",
    category: "",
    amoutProduct: "",
  });
  const { updateProduct } = useUpdate();
  const filtered = data?.find((item) => item.id === id);

  useEffect(() => {
    if (filtered) {
      setFormData({ ...filtered });
    }
  }, [filtered]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
      e.preventDefault();
    if (formData.id) {
      console.log(formData);
      updateProduct(formData.id, formData); // id = Firestore doc.id
    }
  };

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form onSubmit={handleSubmit} className="flex flex-col ">
          {formData.img && (
            <figure className="flex items-center w-full">
              <img className="md:w-full md:h-78" src={formData.img} alt="" />
            </figure>
          )}

          <InputCreate
            type="text"
            name="name"
            lebal="Mahsulot nomi"
            plecholder="Misol: Samarez"
            value={formData.name}
            onChange={handleChange}
            classInput="w-full"
          />

          <InputCreate
            type="text"
            name="description"
            lebal="Tavsif"
            plecholder="Misol: Yashil, 2sm"
            value={formData.description}
            onChange={handleChange}
            classInput="w-full"
          />

          <InputCreate
            type="text"
            name="img"
            lebal="Rasm URL"
            plecholder="Misol: https://example.com"
            value={formData.img}
            onChange={handleChange}
            classInput="w-full"
          />

          <InputCreate
            type="number"
            name="price"
            lebal="Narxi"
            plecholder="Misol: 15000"
            value={formData.price}
            onChange={handleChange}
            classInput="w-full"
          />

          <InputCreate
            type="text"
            name="idP"
            lebal="Mahsulot ID"
            plecholder="0001"
            value={formData.idP}
            onChange={handleChange}
            classInput="w-full"
          />

          <InputCreate
            type="number"
            name="amoutProduct"
            lebal="Qoldiq soni"
            plecholder="Misol: 10"
            value={formData.amoutProduct}
            onChange={handleChange}
            classInput="w-full"
          />

          <InputCreate
            type="number"
            name="salePrice"
            lebal="Chegirma narxi"
            plecholder="Misol: 12000"
            value={formData.salePrice}
            onChange={handleChange}
            classInput="w-full"
            checkbox={!formData.sale}
          />
          <div className="form-control flex flex-row gap-2 items-center">
            <label className="label cursor-pointer">
              <span className="label-text">Chegirma mavjudmi?</span>
            </label>
            <input
              type="checkbox"
              name="sale"
              checked={formData.sale}
              onChange={handleChange}
              className="checkbox"
            />
          </div>
          <div className="modal-action">
            <button type="submit" className="btn btn-info ">
              Yangilash
            </button>
            <form method="dialog">
              <button className="btn w-full">Bekor qilish</button>
            </form>
          </div>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>Yopish</button>
      </form>
    </dialog>
  );
}

export default ChangeProductModal;
