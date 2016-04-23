import React from 'react';
import Setting from './Setting.js';

export default class Table extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    let items = this.props.items.map(item => {
      return (
        <Setting 
          name={ item.name }
          value={item.value}
           />
      )
    });

    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          { items }
        </tbody>
      </table>
    )
  }
}
