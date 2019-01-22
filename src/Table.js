import React, { Component } from 'react';

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
}

//simple Component - if the return is contained to one line, doesnt need ()
const TableBody = props => {
  //props are an effective way to pass existing data to a react component
  //props are readOnly, we have a one way data flow
  const rows = props.characterData.map((row, index) => {
    return (
      //we should always use keys when making lists in react
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
}

//class Component
class Table extends Component {
  render () {
    const { characterData, removeCharacter } = this.props;

    return (
      <table>
        <TableHeader />
        <TableBody
          characterData={characterData}
          removeCharacter={removeCharacter} />
      </table>
    );
  }
}

export default Table;
