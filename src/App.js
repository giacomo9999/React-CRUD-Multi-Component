import React, { Component } from "react";
import Table from "./Table";
import "./index.css";

class App extends Component {
  state = {
    people: [
      { id: 1, name: "Ivan", occupation: "Interior Decorator" },
      { id: 2, name: "Gladys", occupation: "Pastry Chef" },
      { id: 3, name: "Enrique", occupation: "Systems Analyst" },
      { id: 4, name: "Jennifer", occupation: "Backhoe Operator" }
    ]
  };

  removePerson = index => {
    console.log("Removing person..."+index);
    const { people } = this.state;
    this.setState({
      people: people.filter((entry, i) => i !== index)
    });
  };

  render() {
    return (
      <div className="container">
        <h2>I am the App Component</h2>
        <Table personnel={this.state.people} removePerson={this.removePerson} />
      </div>
    );
  }
}

export default App;
