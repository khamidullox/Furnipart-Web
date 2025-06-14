import React from "react";
import { useParams } from "react-router-dom";
import { useCollection } from "../hooks/useCollection";
import { fromatPrice } from "../app/index";

function SingleProdcutPage() {
  let { idP } = useParams();
  let { data } = useCollection("products");

  let newData = data?.filter((item) => item.id == idP);

  console.log(newData);

  return (
    newData &&
    newData.map((item) => {
      return (
        <div className=" glass p-8 mt-6 flex gap-16 justify-start  items-center">
          <div class="">
            <figure className="  size-96  mb-4">
              <img
                className="w-full rounded-2xl h-full object-cover"
                src={item.img}
                alt={item.name}
              />
            </figure>
          </div>
          <div className=" flex flex-col gap-5">
            <div className="text-3xl font-bold text-gray-800 mb-2">
              <h2>{item.name}</h2>
            </div>

            <div className="flex mb-4">
              <div className="mr-4 flex gap-1">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Narxi:
                </span>
                <div
                  className={`badg badg-outline ${
                    item.sale && " decoration-1 line-through opacity-40 "
                  }`}
                >
                  {fromatPrice(item.price)}
                </div>
              </div>
              {item.sale && (
                <div className="badg badg-outline text-red-600">
                  {fromatPrice(item.salePrice)}
                </div>
              )}
            </div>

            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Mahsulot haqida:
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {item.description}
              </p>
            </div>
            <div className="w-1/2 px-2">
              <button class="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                Savatga
              </button>
            </div>
          </div>
        </div>
      );
    })
  );
}

export default SingleProdcutPage;
