import React, { Component } from "react";

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
        {this.props.personnel.map(entry => (
          <tr key={entry.id}>
            <td>{entry.name}</td>
            <td>{entry.occupation}</td>
            <td>
              <button onClick={() => this.props.removePerson(entry.id)}>
                Delete
              </button>
            </td>
            <td>
              <button onClick={() => this.props.openEditForm(entry.id)}>
                Edit
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
    const { personnel, removePerson, openEditForm } = this.props;
    return (
      <div>
        <h4>I Am The Table Component </h4>
        <table id="personnel">
          <TableHeader />
          <TableBody
            personnel={personnel}
            removePerson={removePerson}
            openEditForm={openEditForm}
          />
        </table>
      </div>
    );
  }
}

export default Table;
