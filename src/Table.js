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

class TableBody extends Component {
  render() {
    return (
      <tbody>
        {this.props.personnel.map(entry => (
          <tr key={entry.id}>
            <td>{entry.name}</td>
            <td>{entry.occupation}</td>
          </tr>
        ))}
      </tbody>
    );
  }
}

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
