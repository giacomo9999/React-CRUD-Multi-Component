import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";

import "./index.css";

class App extends Component {
  state = {
    editFormOpen: false,
    lastId: 5,
    people: [
      { id: 1, name: "Ivan", occupation: "Interior Decorator" },
      { id: 2, name: "Gladys", occupation: "Pastry Chef" },
      { id: 3, name: "Enrique", occupation: "Systems Analyst" },
      { id: 4, name: "Jennifer", occupation: "Backhoe Operator" },
      { id: 5, name: "Benedict", occupation: "Ex-Pope" }
    ]
  };

  removePerson = id => {
    console.log("Removing person..." + id);
    const { people } = this.state;
    this.setState({
      people: people.filter((entry, i) => i !== id)
    });
  };

  handleSubmit = person => {
    person.id = this.state.lastId + 1;
    console.log(
      `Handling form submission for name:${person.name} id:${person.id}`
    );
    this.setState({
      lastId: this.state.lastId + 1,
      people: [...this.state.people, person],
      editFormOpen: false
    });
    console.log(this.state);
  };

  renderEditForm() {
    if (this.state.editFormOpen) {
      return <Form handleSubmit={this.handleSubmit} />;
    }
  }

  openEditForm = id => {
    console.log("Opening edit form for..." + id);
    this.setState({ editFormOpen: true });
  };

  render() {
    return (
      <div className="container">
        <h2>I am the App Component</h2>
        <Table
          personnel={this.state.people}
          removePerson={this.removePerson}
          handleSubmit={this.handleSubmit}
          openEditForm={this.openEditForm}
        />
        {this.renderEditForm()}
      </div>
    );
  }
}

export default App;
