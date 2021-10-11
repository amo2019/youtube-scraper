import React, { useState } from "react";
import "./form.css";

const Form = (props) => {
  const [state, setState] = useState({term: ""});
 
 const handleChange = (event) => {
    setState({
      term: event.target.value,
    });
  };

 const handleSubmit = (event) => {
    event.preventDefault();
    props.handleFormSubmit(state.term);
  };

    return (
      <div>
        <h3 className="search-title">Search for YouTube Videos</h3>
        <form className="" onSubmit={handleSubmit}>
          <div className="search-input">
            <input
              className="input-area"
              type="text"
              placeholder="Enter the Video Name"
              value={state.term}
              onChange={handleChange}
            />
          </div>
        </form>
        <br />
      </div>
    );
  }

export default Form;
