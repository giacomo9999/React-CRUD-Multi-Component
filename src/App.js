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

  render() {
    return (
      <div className="container">
        <h2>I am the App Component</h2>
        <Table personnel={this.state.people} />
      </div>
    );
  }
}

export default App;
