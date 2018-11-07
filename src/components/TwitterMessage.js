import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      text: ''
    }
  }

  handleChange = (event) =>
    this.setState({
      text: event.target.value
    })

  counter = () =>
    this.props.maxChars - this.state.text.length

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
        type="text"
        onChange={(event) => this.handleChange(event)}
        value={this.state.text}
        />
        <p>{this.counter()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
