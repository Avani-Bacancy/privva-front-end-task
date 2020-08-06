import React, { Component } from "react";
import ConfigureProgressBar from "./ConfigureProgressBar";
import ProgressBarContainer from "./ProgressBarContainer";

export default class AppContainer extends Component {
  constructor() {
    super();
    this.state = {
      steps: 5,
      progressBarColor: "green",
      style: "square",
      progress: 0,
      isCancel: false,
    };
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onProgressChange = (value) => {
    this.setState({ progress: value });
  };

  onCancel = (value) => {
    if (value) {
      this.setState({
        isCancel: value,
      });
    } else {
      this.setState({
        isCancel: value,
        progress: 0,
      });
    }
  };

  render() {
    const { steps, progressBarColor, style, progress, isCancel } = this.state;
    return (
      <div className="container mt-5">
        <ConfigureProgressBar
          steps={steps}
          progressBarColor={progressBarColor}
          style={style}
          onChange={this.onChange}
        />
        <ProgressBarContainer
          style={style}
          steps={steps}
          progressBarColor={progressBarColor}
          progress={progress}
          onProgressChange={this.onProgressChange}
          isCancel={isCancel}
          onCancel={this.onCancel}
        />
        <p>Note: By clicking on steps you can see progress.</p>
      </div>
    );
  }
}
