import React, { Component } from "react";

class Form extends Component {
  state = {
    term: "",
  };
  handleChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.term);
  };
  render() {
    return (
      <div>
        <h3>Video Stats</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="flex.items-container">
            <input
              type="text"
              placeholder="Enter the Video ID"
              value={this.state.term}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
