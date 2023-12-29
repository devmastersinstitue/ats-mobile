import React, { Component } from "react";

class SetState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  // Updating state using an object
  handleClickIncrement = () => {
    this.setState({
      counter: this.state.counter + 2,
    });
  };

  // Updating state using a function
  handleClickDecrement = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter - 1,
      };
    });
  };

  render() {
    return (
      <div>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.handleClickIncrement}>Increment</button>
        <button onClick={this.handleClickDecrement}>Decrement</button>
      </div>
    );
  }
}

export default SetState;
