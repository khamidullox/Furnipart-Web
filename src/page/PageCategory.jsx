import React from "react";
import { useCollection } from "../hooks/useCollection";
import { PageSingleCard } from "../components";
import { useParams } from "react-router-dom";
import { filterCategor } from "../app/index";
function PageSingl() {
  let { data } = useCollection("products");
  let { id: idParams } = useParams();

  return (
    <>
      <div className="grid md:grid-cols-3 grid-cols-2 items-center justify-center gap-10 py-16">
        {data &&
          filterCategor(data, idParams).map((item, id) => {
            return <PageSingleCard key={id} item={item} id={id} />;
          })}
      </div>
      {!data && (
        <div className=" w-full flex justify-center items-center place-content-center">
          <span className="loading loading-dots  loading-xl text-warning md:size-40 size-12 flex items-center justify-center"></span>
        </div>
      )}
    </>
  );
}

export default PageSingl;
