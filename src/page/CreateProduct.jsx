import React from "react";
import { Form } from "react-router-dom";
import { InputCreate, SelectCategory } from "../components";
import dataBase from "../../public/data/dataBase";

function CreateProduct() {
  return (
    <div className=" flex flex-col  items-center pt-5  gap-2 ">
      <h1 className="text-3xl">Yangi mahsulot </h1>
      <Form className=" flex items-center  gap-2 flex-col justify-center border p-16 rounded-2xl glass  ">
        <InputCreate
          name="name"
          lebal="Nomi:"
          type="text"
          plecholder="Misol:Samarez"
        />
        <SelectCategory option={dataBase} name="category" lebal="Categoriya" />
        <InputCreate
          name="description"
          lebal="U haqida: "
          type="text"
          plecholder="Misol: Yashil , 2sm"
        />
        <InputCreate
          name="img"
          lebal="Rasim "
          type="text"
          plecholder="Misol: https://example.exe"
        />{" "}
        <InputCreate
          name="price"
          lebal="Narxi "
          type="number"
          plecholder="Misol: Yashil , 2sm"
        />
        <InputCreate
          name="idP"
          lebal="Mahsulot ID "
          type="number"
          plecholder="Misol: 0001"
        />
      </Form>
    </div>
  );
}

export default CreateProduct;
