import React from "react";

const CustomSelect = (props) => {
  const { label, name, value, onChange, selectOptions } = props;

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        className="form-control"
        value={value}
        onChange={onChange}
      >
        {selectOptions &&
          selectOptions.map((selectOption) => {
            return (
              <option value={selectOption.value} key={selectOption.value}>
                {selectOption.label}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default CustomSelect;
