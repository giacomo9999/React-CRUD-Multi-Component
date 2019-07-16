import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      name: "",
      job: ""
    };

    this.state = this.initialState;
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, occupation } = this.state;

    return (
      <div>
        <h4>I Am The Form</h4>
        <form>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />

          <label>Occupation</label>
          <input
            type="text"
            name="name"
            value={occupation}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default Form;
