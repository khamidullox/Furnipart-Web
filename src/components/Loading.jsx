import React from "react";

function Loading() {
  return (
    <div className=" w-full flex justify-center items-center place-content-center">
      <span className="loading loading-dots  loading-xl text-warning md:size-40 size-12 flex items-center justify-center"></span>
    </div>
  );
}

export default Loading;
