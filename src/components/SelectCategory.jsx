import React, { useRef, useState } from "react";

function SelectCategory({ option, name, lebal, type, plecholder }) {
  const [form, setForm] = useState({
    name: "",
  });
  const handleChange = (event) => {
    setForm({ name: event.target.value });
  };

  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend">{lebal}</legend>
      <select
        name={name}
        onChange={handleChange}
        className="select w-96 font-light  text-xs  "
      >
        {option.homepageList.map((item, id) => {
          return (
            <option
              className="font-light text-xs "
              key={id}
              defaultValue={item.url}
            >
              {item.title}
            </option>
          );
        })}
      </select>
      {/* <span className="label">Optional</span> */}
    </fieldset>
  );
}

export default SelectCategory;
