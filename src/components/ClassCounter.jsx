import React, { Component } from "react";

export default class ClassCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>plus</button>
        <button onClick={this.decrement}>minus</button>
      </div>
    );
  }
}
