import React from 'react';
import ReactDOM from 'react-dom';
import EventEmitterFactory from 'event_emitter';
import KeyValueEditor from './KeyValueEditor.js';

// Sample controller for the page.
export default class Page extends React.Component {

  constructor() {
    super();
    this._emitter = EventEmitterFactory.getEventEmitter();
    this._emitter.on('SAVE_RESPONSE', this.onSaveResponse, this);
    this._emitter.on('ADD_SETTING_CLICKED', this.onAddSettingClick, this);
    this.state = { items: [] };
  }

  onSaveResponse(response) {

    if(response.success) {
      alert('Item saved.')
      let copy = this.state.items.slice();

      for(let i = 0; i < copy.length; i++) {
        if(copy[i].name === response.data.name) {
          copy[i].value = response.data.value;
        }
      }

      this.setState({ items: copy });
    }
    else {
      alert('Error saving item.');
    }
  }

  onAddSettingClick() {
    let currentItems = this.state.items.slice();
    currentItems.push({ name: "New Setting", value: "New Value" });
    
    this.setState({ items: currentItems });
  }

  render() {
    return (
      <KeyValueEditor 
          title={"Account Profile"} 
          items={this.state.items} />
    )
  }

  componentWillMount () {
    this.getItems().then((items) => {
      this.setState({ items: items });
    });
  }

  getItems() {
    return new Promise((resolve, reject) => {
      let items = [
        { name: 'Test1', value: 'Value1'},
        { name: 'Test2', value: 'Value2'},
        { name: 'Test3', value: 'Value3'},
        { name: 'Test4', value: 'Value4'},
        { name: 'Test5', value: 'Value5'},
        { name: 'Test6', value: 'Value6'}
      ];

      resolve(items);
    });
  }
}

