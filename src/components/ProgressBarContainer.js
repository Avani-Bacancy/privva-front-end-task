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
  let progressLabels = [];
  for (let i = 0; i <= progress; i++) {
    if (i === 0) {
      progressLabels = [...progressLabels, "NOT STARTED "];
    } else if (Number(progress) === Number(steps)) {
      progressLabels = [...progressLabels, "ALL STAGE COMPLETED"];
    } else progressLabels = [...progressLabels, "STAGE-" + i + " COMPLETED"];
  }
  return (
    <div className="mt-5 p-lg-5 border border-dark">
      <div className="progress-bar-row">
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
      <div className="row">
        <div className="col-12">
          {isCancel ? (
            <div className="text-center text-danger mx-1 mt-lg-5 mt-2">
              <u>CANCELED</u>
            </div>
          ) : (
            <div className="text-center mt-lg-5 mt-4">
              <u>{progressLabels[progress]}</u>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgressBarContainer;
