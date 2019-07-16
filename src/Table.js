import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};

const TableBody = props => {
  const { personnel } = props;
  return (
    <tbody>
      {personnel.map((entry, index) => (
        <tr key={entry.id}>
          <td>{entry.name}</td>
          <td>{entry.occupation}</td>
          <td>
            <button onClick={() => props.removePerson(index)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

class Table extends Component {
  render() {
    return (
      <div>
        <table id="personnel">
          <TableHeader />
          <TableBody
            personnel={this.props.personnel}
            removePerson={this.props.removePerson}
          />
        </table>
      </div>
    );
  }
}

export default Table;
