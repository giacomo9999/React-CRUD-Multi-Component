import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      name: "",
      occupation: ""
    };

    this.state = this.initialState;
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { name, occupation } = this.state;

    return (
      <div>
        <h4>I Am The Form Component</h4>
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
            name="occupation"
            value={occupation}
            onChange={this.handleChange}
          />
          <input type="button" value="submit" onClick={this.submitForm} />
        </form>
      </div>
    );
  }
}

export default Form;
