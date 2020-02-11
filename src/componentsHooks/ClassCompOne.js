import React, { Component } from "react";

class ClassCompOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  clickHandle = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.clickHandle}>Click + - {this.state.count}</button>
      </div>
    );
  }
}

export default ClassCompOne;
