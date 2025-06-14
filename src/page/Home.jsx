import React from "react";
import dataBase from "../../public/data/dataBase";
import { HomeListCard, SearchHome } from "../components";

function Home() {
  return (
    <div className=" flex flex-col gap-5 py-4  items-center">
      <div className="w-full flex gap-2">
        <SearchHome />
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 items-center justify-center gap-10 ">
        {dataBase.homepageList.map((item, id) => {
          return <HomeListCard key={id} item={item} id={id} />;
        })}
      </div>
    </div>
  );
}

export default Home;
