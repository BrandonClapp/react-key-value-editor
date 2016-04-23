import React from 'react'
import EventEmitterFactory from 'event_emitter';

export default class Setting extends React.Component {
  constructor(props) {
    super();
    this.state = { selected: false, value: props.value };
    this._emitter = EventEmitterFactory.getEventEmitter();
  }

  inputChanged(e) {
    this.setState({ value: e.target.value });
  }

  inputKeyDown(e) {
    if(e.keyCode === 13) {
      this.save({ name: this.props.name, value: this.state.value });
    }
  }

  save(setting) {
    this.setState( { selected: false });
    this._emitter.fire('SAVE_REQUEST', setting);
  }

  cellClicked() {
    this.setState({ selected: !this.state.selected });
  }

  render() {
    return (
      <tr name={ this.props.name }>
        <td>{ this.props.name }</td>
        <td className={ this.state.selected ? 'hidden': ''} onClick={ this.cellClicked.bind(this) }>{ this.props.value }</td>
        <td className={ this.state.selected ? '': 'hidden'}>
          <input onChange={ this.inputChanged.bind(this) } onKeyDown={ this.inputKeyDown.bind(this) } defaultValue={this.state.value} type="text" className="form-control" />
        </td>
      </tr>
    )
  }
}
