import React, { Component } from "react";
import ConfigureProgressBar from "./ConfigureProgressBar";

export default class AppContainer extends Component {
  constructor() {
    super();
    this.state = {
      steps: 3,
      progressBarColor: "green",
      style: "square",
    };
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { steps, progressBarColor, style } = this.state;
    return (
      <div className="container mt-5">
        <ConfigureProgressBar
          steps={steps}
          progressBarColor={progressBarColor}
          style={style}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
