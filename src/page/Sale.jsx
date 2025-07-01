import React from "react";
import { useCollection } from "../hooks/useCollection";
import { Loading, PageSingleCard } from "../components";
import { Link } from "react-router-dom";

function Sale() {
  let { data } = useCollection("products", "");

  return (
    <>
      <div className="grid md:grid-cols-3 grid-cols-2 items-center justify-center gap-4 py-16">
        {data &&
          data.map((item, id) => {
            return (
              item.sale == "on" && (
                <Link
                  className={`${
                    item.amoutProduct > 0 ? "" : "pointer-events-none"
                  } `}
                  key={id}
                  to={`/product/${item.id}`}
                >
                  <PageSingleCard key={id} item={item} id={id} />
                </Link>
              )
            );
          })}
      </div>{" "}
      {!data && <Loading />}
    </>
  );
}

export default Sale;
