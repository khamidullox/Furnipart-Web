import React from "react";
import { useCollection } from "../hooks/useCollection";
import { filterCategor } from "../app/format";
import { Link } from "react-router-dom";
import PageSingleCard from "./PageSingleCard";

function RecProductCategory({ category, data }) {
  return (
    <div className="flex gap-2 flex-col ">
      <div>
        <h3 className="text-xl p-5">Shunga o'xshash:</h3>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 items-center justify-center gap-10 px-4">
        {data &&
          filterCategor(data, category).map((item, id) => {
            return (
              item.amoutProduct > 0 && (
                <Link
                  className={`${
                    item.amoutProduct > 0 ? "" : "pointer-events-none"
                  } `}
                  key={id}
                  to={`/product/${item.id}`}
                >
                  <PageSingleCard item={item} id={id} />
                </Link>
              )
            );
          })}
      </div>
    </div>
  );
}

export default RecProductCategory;
