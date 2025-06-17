import React from "react";
function InputCreate({
  name,
  lebal,
  type,
  plecholder,
  classInput,
  checkbox,
  value,
  onChange,
}) {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend">{lebal}</legend>
      <input
        disabled={checkbox}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={`input ${classInput} [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
        placeholder={plecholder}
        autoComplete="off"
      />
    </fieldset>
  );
}

export default InputCreate;
