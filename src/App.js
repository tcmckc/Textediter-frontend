import React, { Component } from 'react';
import './App.css';
//import { TrixEditor } from "react-trix";
//import "trix/dist/trix";
import Trix from 'trix';

class Save extends React.Component {
  getText() {
    var element = document.querySelector("trix-editor");
    var result = element.editor.getDocument().toString();
    console.log(result);
  }

  render() {
    return (
      <button onClick={this.getText}>Save</button>
    )
  }
}

class App extends Component {

  render() {
    return (
      <div className="TrixEditor">
        <trix-editor input="trix" />
        <Save />
      </div>
    )
  }
}

export default App;
