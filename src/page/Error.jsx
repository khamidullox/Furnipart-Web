import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="grid place-content-center  h-lvh items-center justify-center">
      <div className="flex  flex-col items-center justify-center gap-5">
        <h1 className="md:text-6xl text-4xl font-bold">Error 404 </h1>
        <p>Sahifa topilmadi </p>
        <Link to="/" className=" link hover:text-amber-500">
          Asosiy
        </Link>
      </div>
    </div>
  );
}

export default Error;
