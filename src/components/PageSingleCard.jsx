import React from "react";
import { fromatPrice } from "../app/format";

function PageSingleCard({ item, id }) {
  return (
    <div
      className={` md:text-xl text-xs card md:flex-row  bg-base-100  w-full lg:h-full h-full  md:p-5 p-2 ${
        item.amoutProduct <= 0 ? "  opacity-30  " : "hover:shadow-xl"
      } pb-2 shadow-sm items-center md:gap-5 gap-2  transition-shadow border-1 hover:border-amber-400 relative`}
    >
      <figure className="sm:w-40 md:h-28 h-36 md:mt-0 mt-5 relative ">
        <img src={item.img} alt={item.name} className=" object-bottom  " />
        <div className=" absolute right-0 bottom-0 text-sm">
          {item.amoutProduct}x
        </div>
      </figure>
      <div className=" flex flex-col w-full gap-3 md:items-baseline items-center justify-center">
        <h2 className="car-title md:text-xl  text-center">
          {item.name}
          {item.sale && (
            <div className=" absolute right-0 top-0 badge bg-secondary-red text-white ml-2 text-xs discount-badge ">
              Chegirma
            </div>
          )}
        </h2>
        <p className="md:text-sm opacity-80 text-center md:text-start">
          * {item.description}
        </p>

        <div className="card-action w-full flex lg:flex-row flex-col text-sm gap-2 md:items-end items-center justify-end">
          <div
            className={`badg badg-outline ${
              item.sale && " decoration-1 line-through opacity-40 text-xs"
            }`}
          >
            {fromatPrice(item.price)}
          </div>
          {item.sale && (
            <div className="badg badg-outline text-red-600">
              {fromatPrice(item.salePrice)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PageSingleCard;
