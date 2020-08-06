import React from "react";
import ProgressBar from "./ProgressBar";

const ProgressBarContainer = ({
  style,
  steps,
  progressBarColor,
  progress,
  onProgressChange,
  isCancel,
  onCancel,
}) => {
  return (
    <div
      className="mt-5 p-5 border border-dark d-flex
        align-items-center justify-content-between"
    >
      <ProgressBar
        style={style}
        steps={steps}
        progressBarColor={progressBarColor}
        progress={progress}
        onProgressChange={onProgressChange}
        isCancel={isCancel}
      />
      {isCancel ? (
        <button className="btn btn-md btn-primary" onClick={() => onCancel(false)}>
          Go
        </button>
      ) : (
        <button className="btn btn-md btn-danger" onClick={() => onCancel(true)}>
          Cancel
        </button>
      )}
    </div>
  );
};

export default ProgressBarContainer;
