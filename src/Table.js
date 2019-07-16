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
  return (
    <tbody>
      {props.personnel.map((entry, index) => (
        <tr key={entry.id}>
          <td>{entry.name}</td>
          <td>{entry.occupation}</td>
        </tr>
      ))}
    </tbody>
  );
};

class Table extends Component {
  render() {
    return (
      <div>
        <table>
          <TableHeader />
          <TableBody personnel={this.props.personnel} />
        </table>
      </div>
    );
  }
}

export default Table;
