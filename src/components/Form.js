import React, { Component } from "react";
import "./form.css";

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
        <h3 className="search-title">Search for YouTube Videos</h3>
        <form className="" onSubmit={this.handleSubmit}>
          <div className="search-input">
            <input
              className="input-area"
              type="text"
              placeholder="Enter the Video Name"
              value={this.state.term}
              onChange={this.handleChange}
            />
          </div>
        </form>
        <br />
      </div>
    );
  }
}

export default Form;
