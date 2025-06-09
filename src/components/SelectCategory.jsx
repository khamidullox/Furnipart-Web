import React, { useState } from "react";

function SelectCategory({ option, name, lebal, value, onChange }) {
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
        onChange={onChange}
        value={value}
        className="select md:w-96 w-64 font-light text-xs"
      >
        {option.homepageList.map((item, id) => (
          <option key={id} value={item.url} className="font-light text-xs">
            {item.title}
          </option>
        ))}
      </select>
    </fieldset>
  );
}

export default SelectCategory;
