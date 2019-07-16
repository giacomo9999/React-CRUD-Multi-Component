import React, { Component } from "react";
import Form from "./Form";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th />
      </tr>
    </thead>
  );
};

// const TableBody = props => {
//   const { personnel } = props;
//   return (
//     <tbody>
//       {personnel.map((entry, index) => (
//         <tr key={entry.id}>
//           <td>{entry.name}</td>
//           <td>{entry.occupation}</td>
//           <td>
//             <button onClick={() => props.removePerson(index)}>Delete</button>
//           </td>
//         </tr>
//       ))}
//     </tbody>
//   );
// };

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
  render() {
    const { personnel, removePerson } = this.props;
    return (
      <div>
        <h4>I Am The Table</h4>
        <table id="personnel">
          <TableHeader />
          <TableBody personnel={personnel} removePerson={removePerson} />
        </table>
        <Form />
      </div>
    );
  }
}

export default Table;
