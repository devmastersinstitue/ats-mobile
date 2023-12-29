import React, { Component } from "react";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello, React!",
    };
  }
  App() {
    console.log("App");
  }

  handleClick = () => {
    console.log("Button clicked");
  };
  handleChangeMessage = () => {
    this.setState({
      message: "New message here!",
    });
  };
  render() {
    console.log("Component rendered");

    return (
      <div>
        <p>My React Component</p>

        <p>{this.state.message}</p>
        <button onClick={this.handleChangeMessage}>Change Message</button>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default Message;
