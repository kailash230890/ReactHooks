import React, { Component } from "react";

class ClassCounterTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState(prevCount => {
      return {
        count: prevCount.count + 1
      };
    });
  };
  decrementCount = () => {
    this.setState(prevCount => {
      return {
        count: prevCount.count - 1
      };
    });
  };
  render() {
    return (
      <div>
        Count - {this.state.count}
        <button onClick={this.incrementCount}>Count++</button>
        <button onClick={this.decrementCount}>Decrement -- </button>
      </div>
    );
  }
}

export default ClassCounterTwo;
