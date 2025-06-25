import React, { useEffect, useState } from "react";
import { Form, useActionData } from "react-router-dom";
import { InputCreate, SelectCategory } from "../components";
import dataBase from "../../public/data/dataBase";
import { useCreate } from "../hooks/useCollection";
import ModalCreate from "./ModalCreate";

export let action = async ({ request }) => {
  let formData = await request.formData();
  let data = Object.fromEntries(formData);
  let sale = formData.get("sale");
  let salePrice = formData.get("salePrice");
  return { ...data, sale, salePrice };
};

function CreateProduct() {
  const { createProduct } = useCreate();
  const productDate = useActionData();

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

  useEffect(() => {
    if (productDate) {
      createProduct(productDate);

      // Сброс формы
    }
  }, [productDate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="flex flex-col items-center py-5 gap-2">
      <h1 className="text-3xl">Yangi mahsulot</h1>
      <div className="border p-12 py-5 rounded-2xl glass">
        <Form
          method="post"
          className="flex items-center gap-2 pb-2 flex-col justify-center "
        >
          <InputCreate
            classInput="md:w-96"
            name="name"
            lebal="Nomi:"
            type="text"
            plecholder="Misol: Samarez"
            value={formData.name}
            onChange={handleChange}
          />
          <SelectCategory
            option={dataBase}
            name="category"
            lebal="Categoriya"
            value={formData.category}
            onChange={handleChange}
          />
          <InputCreate
            classInput="md:w-96"
            name="idP"
            lebal="Mahsulot ID"
            type="number"
            plecholder="Misol: 0001"
            value={formData.idP}
            onChange={handleChange}
          />
          <InputCreate
            classInput="md:w-96"
            name="description"
            lebal="U haqida:"
            type="text"
            plecholder="Misol: Yashil, 2sm"
            value={formData.description}
            onChange={handleChange}
          />
          <InputCreate
            classInput="md:w-96"
            name="img"
            lebal="Rasim"
            type="text"
            plecholder="Misol: https://example.com"
            value={formData.img}
            onChange={handleChange}
          />
          <InputCreate
            classInput="md:w-96"
            name="price"
            lebal="Mahsulot Narxi"
            type="number"
            plecholder="Misol: 15000"
            value={formData.price}
            onChange={handleChange}
          />
          <InputCreate
            classInput="md:w-96"
            name="amoutProduct"
            lebal="Miqdori"
            type="number"
            plecholder="Misol: 10"
            value={formData.amoutProduct}
            onChange={handleChange}
          />
          <div className="flex md:gap-5 gap-2 items-center justify-center">
            <input
              name="sale"
              type="checkbox"
              className="checkbox mt-6"
              checked={formData.sale}
              onChange={handleChange}
            />
            <InputCreate
              checkbox={!formData.sale}
              classInput="md:w-84"
              name="salePrice"
              lebal="Chegirmadga narxi (agar bolsa)"
              type="number"
              plecholder="Misol: 10000"
              value={formData.salePrice}
              onChange={handleChange}
            />
          </div>

          <button className="btn bg-primary-yellow  w-full">Jonatish</button>
        </Form>
        <ModalCreate dataProduct={formData} />
      </div>
    </div>
  );
}

export default CreateProduct;
