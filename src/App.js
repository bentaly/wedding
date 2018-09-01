import React, { Component } from 'react';
import logo from './migben.png';
import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Ben and Mig's wedding</h1>
        </header>
        <p className="App-intro">
          Website under construction!
        </p>
        <BrowserRouter>
          <InnerApp />
        </BrowserRouter>
      </div>
    );
  }
}

const InnerApp = () => (
  <div>
    <nav>
      <Link to="/">Home</Link>
    </nav>
    <nav>
      <Link to="/d1">Somewhere</Link>
    </nav>
    <nav>
      <Link to="/d2">Else</Link>
    </nav>
    <div>
      <Route exact={true} path="/" component={Home} />
    </div>
    <div>
      <Route exact={true} path="/d1" component={Somewhere} />
    </div>
    <div>
      <Route exact={true} path="/d2" component={Else} />
    </div>
  </div>
)

const Home = () => (
  <div>
    Home
  </div>
)

const Somewhere = () => (
  <div>
    Somewhere
  </div>
)

const Else = () => (
  <div>
    else
  </div>
)

export default App;
