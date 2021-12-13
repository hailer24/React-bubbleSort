import React, { Component } from "react";
import Bar from "./Bar";
import "../css/App.css";
import bubble from "./bubbleSort";

export default class App extends Component {
  state = {
    array: [],
    arraySteps: [],
    colors: [],
    colorSteps: [],
    step: 0,
    count: 10,
    delay: 500,
    timeouts: [],
  };

  componentDidMount() {
    this.generateRandomArray();
  }

  clearTimeouts = () => {
    this.state.timeouts.forEach((e) => clearTimeout(e));
    this.setState({
      timeouts: [],
    });
  };

  generateSteps = () => {
    let arr = this.state.array.slice();
    let steps = this.state.arraySteps.slice();
    let colors = this.state.colorSteps.slice();
    bubble(arr, 0, steps, colors);
    //console.log(colors);
    this.setState({ arraySteps: steps, colorSteps: colors });
  };

  clearColor = () => {
    let blankKey = new Array(this.state.count).fill(0);
    this.setState({
      colors: blankKey,
      colorSteps: [blankKey],
    });
  };

  generateRandomArray = () => {
    this.clearTimeouts();
    const count = this.state.count;
    this.clearColor();
    const temp = [];

    for (let i = 0; i < count; i++) {
      temp.push(Math.floor(Math.random() * (100 - 20) + 20));
    }
    //console.log(temp);
    this.setState(
      {
        array: temp,
        arraySteps: [temp],
        step: 0,
      },
      () => {
        //console.log("called");
        this.generateSteps();
      }
    );
  };

  increaseBars = (e) => {
    this.clearTimeouts();
    this.setState({
      count: e,
    });
  };

  start = () => {
    let steps = this.state.arraySteps;
    let colorSteps = this.state.colorSteps;

    this.clearTimeouts();

    let timeouts = [];
    let i = 0;

    while (i < steps.length - this.state.step) {
      let timeout = setTimeout(() => {
        let step = this.state.step;
        this.setState({
          array: steps[step],
          colors: colorSteps[step],
          step: step + 1,
        });
        timeouts.push(timeout);
      }, this.state.delay * i);
      i++;
    }

    this.setState({
      timeouts: timeouts,
    });
  };

  render() {
    let bars = this.state.array.map((e, idx) => {
      return (
        <Bar key={idx} index={idx} length={e} color={this.state.colors[idx]} />
      );
    });
    return (
      <div className="app">
        <div className="frame">
          <div className="bars">{bars}</div>
        </div>
        <div className="panel">
          <div className="buttons">
            <button className="controller" onClick={this.generateRandomArray}>
              Random
            </button>
            <button className="controller" onClick={this.start}>
              Sort
            </button>
          </div>
        </div>
      </div>
    );
  }
}
