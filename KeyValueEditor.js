import React from 'react';
import Toolbar from './Toolbar.js';
import Table from './Table.js';

export default class KeyValueEditor extends React.Component {

  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">{ this.props.title || "Key Value Editor" }</h3>
          </div>
          <div className="panel-body">
            <Toolbar />
            <Table items={ this.props.items } />
          </div>
        </div>
      </div>
    )
  }
}
