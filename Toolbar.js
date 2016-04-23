import React from 'react'
import EventEmitterFactory from 'event_emitter';

export default class Toolbar extends React.Component {
  constructor(props) {
    super();
    this.state = { };
    this._emitter = EventEmitterFactory.getEventEmitter();
  }

  onAddSettingClick() {
    this._emitter.fire('ADD_SETTING_CLICKED');
  }

  render() {
  	return (
		<div className="well well-sm">
	      <button onClick={ this.onAddSettingClick.bind(this) } className="btn btn-primary pull-left">Add Setting</button>
	      <div className="clearfix"></div>
	    </div>
	)
  }
}