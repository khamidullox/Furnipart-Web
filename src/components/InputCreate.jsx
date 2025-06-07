import React from "react";

function InputCreate({ name, lebal, type, plecholder }) {
  return (
    <fieldset className="fieldset  ">
      <legend className="fieldset-legend ">{lebal}</legend>
      <input
        name={name}
        type={type}
        className={`input w-96 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
        placeholder={plecholder}
        autoComplete="off"
      />
      {/* <p className="label">Optional</p> */}
    </fieldset>
  );
}

export default InputCreate;
