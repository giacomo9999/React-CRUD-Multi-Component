import React, { Component } from "react";
import Table from "./Table";
import "./index.css";

class App extends Component {
  state = {
    people: [
      { id: 1, name: "Ivan", occupation: "Interior Decorator" },
      { id: 2, name: "Gladys", occupation: "Pastry Chef" },
      { id: 3, name: "Enrique", occupation: "Systems Analyst" },
      { id: 4, name: "Jennifer", occupation: "Backhoe Operator" },
      { id: 5, name: "Benedict", occupation: "Ex-Pope" }
    ]
  };

  removePerson = index => {
    console.log("Removing person..." + index);
    const { people } = this.state;
    this.setState({
      people: people.filter((entry, i) => i !== index)
    });
  };

  handleSubmit = person => {
    console.log("Handling form submission..." + person.name);
    person.id = this.state.people.length + 1;
    this.setState({ people: [...this.state.people, person] });
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <h2>I am the App Component</h2>
        <Table
          personnel={this.state.people}
          removePerson={this.removePerson}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
