import React, { Component } from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Button type="primary">Button</Button>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>s1rc/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
