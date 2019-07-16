import React, { Component } from "react";
import Form from "./Form";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Occupation</th>
        <th />
      </tr>
    </thead>
  );
};

class TableBody extends Component {
  render() {
    return (
      <tbody>
        {this.props.personnel.map((entry, index) => (
          <tr key={entry.id}>
            <td>{entry.name}</td>
            <td>{entry.occupation}</td>
            <td>
              <button onClick={() => this.props.removePerson(index)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
}

class Table extends Component {
  state = { showEditForm: false };
  render() {
    const { personnel, removePerson, handleSubmit } = this.props;
    return (
      <div>
        <h4>I Am The Table Component </h4>
        <table id="personnel">
          <TableHeader />
          <TableBody personnel={personnel} removePerson={removePerson} />
        </table>
        <Form handleSubmit={handleSubmit} />
      </div>
    );
  }
}

export default Table;
