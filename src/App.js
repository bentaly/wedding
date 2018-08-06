import React, { Component } from 'react';
import logo from './migben.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Ben and Mig's wedding</h1>
        </header>
        <p className="App-intro">
          Website under construction
        </p>
      </div>
    );
  }
}

export default App;
