import React from "react";
import { Link, useParams } from "react-router-dom";
import { useCollection } from "../hooks/useCollection";
import { fromatPrice } from "../app/index";
import { RecProductCategory } from "../components";

function SingleProdcutPage() {
  let { idP } = useParams();
  let { data } = useCollection("products");
  let newData = data?.filter((item) => item.id == idP);

  return (
    newData &&
    newData.map((item) => {
      return (
        <div className="py-6">
          <div className="">
            <div className=" pb md:pl-5">
              {" "}
              <Link to="/" className="text-xl link-error text-red-600">
                &lt; Assosiy
              </Link>{" "}
            </div>
            <div className=" glass p-6 mt-6 rounded-2xl flex md:flex-row flex-col gap-16 justify-start  items-center">
              <div class="">
                <figure className="  lg:size-96 size-60  ">
                  <img
                    className="w-full rounded-2xl h-full object-contain"
                    src={item.img}
                    alt={item.name}
                  />
                </figure>
              </div>
              <div className=" flex flex-col gap-5 lg:text-lg text-sm">
                <div className="md:text-3xl text-lg font-bold text-gray-800 mb-2">
                  <h2>{item.name}</h2>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold opacity-80  ">Categoriya:</span>
                  <span className=" capitalize">{item.category}</span>
                </div>

                <div className="flex sm:flex-row flex-col sm:items-center gap-2">
                  <span className="font-bold opacity-80  ">
                    Mahsulot haqida:
                  </span>
                  <p className="   ">{item.description}</p>
                </div>
                <div className="flex gap-2">
                  <span className=" opacity-80">Qoldiq:</span>
                  <span>{item.amoutProduct}x</span>
                </div>

                <div className="flex gap-2 items-end">
                  <span className=" opacity-80 ">Narxi:</span>
                  <div
                    className={`badg badg-outline ${
                      item.sale &&
                      " decoration-1 line-through opacity-40 text-xs  "
                    }`}
                  >
                    {fromatPrice(item.price)} {!item.sale && "so'm"}
                  </div>
                  {item.sale && (
                    <div className="badg badg-outline text-red-600">
                      {fromatPrice(item.salePrice)} so'm
                    </div>
                  )}
                </div>

                <div className="">
                  <button class="btn btn-accent rounded-4xl">Savatga</button>
                </div>
              </div>
            </div>
          </div>
          <RecProductCategory category={item.category} data={data} />
        </div>
      );
    })
  );
}

export default SingleProdcutPage;
