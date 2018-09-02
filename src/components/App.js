import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutingComponent from './RoutingComponent';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">
            <span>Camila</span>
            <span>and</span>
            <span>Ben</span>
          </h1>
        </header>
        <BrowserRouter>
          <RoutingComponent />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
