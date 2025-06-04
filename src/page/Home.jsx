import React from "react";
import dataBase from "../../public/data/dataBase";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className=" flex flex-col gap-5 py-4  items-center">
      <div className="w-full">
        <label className="input w-full">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" className="grow" placeholder="Search" />
          {/* <kbd className="kbd kbd-sm">⌘</kbd>
          <kbd className="kbd kbd-sm">K</kbd> */}
        </label>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 items-center justify-center gap-10 ">
        {dataBase.homepageList.map((item, id) => {
          return (
            <Link
              to={item.url}
              id="id"
              className="card md:flex-row  bg-base-100 w-full md:h-32 h-full  md:p-2 p-0.5 shadow-sm items-center md:gap-5 gap-2 hover:shadow-xl transition-shadow border-1 hover:border-amber-400"
            >
              <figure>
                <img
                  src={item.img}
                  alt="Shoes"
                  className="lg:size-24 size-16 "
                />
              </figure>
              <div className="">
                <h2 className="card-titl md:text-xl text-sm ">{item.title}</h2>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
