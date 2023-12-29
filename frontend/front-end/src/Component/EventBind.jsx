import React, { Component } from 'react';

class EventBind extends Component {
  constructor(props) {
    super(props);

    // Bind event handlers in the constructor
    this.handleClick = this.handleClick.bind(this);
  }

  // Event handler method
  handleClick() {
    console.log('Button clicked!');
  }

  render() {
    return (
      <div>
        {/* Use the bound event handler in the JSX */}
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default EventBind;
