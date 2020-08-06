import React from "react";

const ProgressBar = ({
  steps,
  style,
  progressBarColor,
  progress,
  onProgressChange,
  isCancel,
}) => {
  const stepsData = [...new Array(Number(steps)).keys()];
  return (
    <div className="d-flex align-items-center flex-wrap">
      {stepsData &&
        stepsData.map((step) => {
          return (
            <div
              className={
                isCancel
                  ? `shape-${step + 1} progress-bar-shape ${style} `
                  : `${style} progress-bar-shape`
              }
              key={step + 1}
              style={{
                backgroundColor: !isCancel
                  ? progress >= step + 1
                    ? progressBarColor
                    : ""
                  : "",
              }}
              onClick={() => onProgressChange(step + 1)}
            />
          );
        })}
    </div>
  );
};

export default ProgressBar;
