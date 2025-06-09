import React from "react";
import { useCollection } from "../hooks/useCollection";
import { Loading, PageSingleCard } from "../components";

function Sale() {
  let { data } = useCollection("products" , "");

  return (
    <>
      <div className="grid md:grid-cols-3 grid-cols-2 items-center justify-center gap-10 py-16">
        {data &&
          data.map((item, id) => {
            return (
              item.sale == "on" && (
                <PageSingleCard key={id} item={item} id={id} />
              )
            );
          })}
      </div>{" "}
      {!data && <Loading />}
    </>
  );
}

export default Sale;
