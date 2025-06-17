import React from "react";
import { useCollection } from "../hooks/useCollection";
import { Loading, PageSingleCard } from "../components";
import { Link, useParams } from "react-router-dom";
import { filterCategor } from "../app/index";

function PageSingl() {
  let { data } = useCollection("products");
  let { id: idParams } = useParams();

  return (
    <div className="py-6">
      <div className=" pb-6 md:pl-5">
        {" "}
        <Link to="/" className="text-xl link-error text-red-600">
          &lt; Assosiy
        </Link>{" "}
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 items-center justify-center gap-10 ">
        {data &&
          filterCategor(data, idParams).map((item, id) => {
            return (
              <Link
                className={`${
                  item.amoutProduct > 0 ? "" : "pointer-events-none"
                } `}
                key={id}
                to={`/product/${item.id}`}
              >
                <PageSingleCard item={item} id={id} />
              </Link>
            );
          })}
      </div>
      {!data && <Loading />}
    </div>
  );
}

export default PageSingl;
