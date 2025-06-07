import React from "react";
import { Link } from "react-router-dom";

function HomeListCard({ item, id }) {
  return (
    <Link
      to={`/${item.url}`}
      key={id}
      className="card md:flex-row  bg-base-100 w-full md:h-32 h-full  md:p-2 p-0.5 shadow-sm items-center md:gap-5 gap-2 hover:shadow-xl transition-shadow border-1 hover:border-amber-400"
    >
      <figure>
        <img src={item.img} alt="Shoes" className="lg:size-24 size-16 " />
      </figure>
      <div className="">
        <h2 className="card-titl md:text-xl text-sm ">{item.title}</h2>
      </div>
    </Link>
  );
}

export default HomeListCard;
