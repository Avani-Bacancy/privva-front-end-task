import React from "react";
import CustomSelect from "./commonComponents/CustomSelect";

const ConfigureProgressBar = ({ steps, progressBarColor, style, onChange }) => {
  const stepsOption = [
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
    { label: "6", value: 6 },
    { label: "7", value: 7 },
    { label: "8", value: 8 },
  ];

  const styleOptions = [
    { label: "Square", value: "square" },
    { label: "Circle", value: "circle" },
    { label: "Rectangle", value: "rectangle" },
  ];

  const progressBarColorOptions = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
    { label: "Yellow", value: "yellow" },
  ];
  return (
    <div>
      <div className="row">
        <div className="col-12 mb-3">
          <h4>Configure progress bar:</h4>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-4 col-md-4 col-12">
          <CustomSelect
            label="Select no of steps"
            name="steps"
            value={steps}
            selectOptions={stepsOption}
            onChange={onChange}
          />
        </div>
        <div className="col-lg-4 col-md-4 col-12">
          <CustomSelect
            label="Select progress color"
            name="progressBarColor"
            value={progressBarColor}
            selectOptions={progressBarColorOptions}
            onChange={onChange}
          />
        </div>
        <div className="col-lg-4 col-md-4 col-12">
          <CustomSelect
            label="Select style"
            name="style"
            value={style}
            selectOptions={styleOptions}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ConfigureProgressBar;
