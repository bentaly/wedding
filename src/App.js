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
          <RoutingComponent />
        </BrowserRouter>
      </div>
    );
  }
}


const Home = () => (
  <div>
    Home
  </div>
)

const RSVP = () => (
  <div>
    RSVP
  </div>
)

const Accomodation = () => (
  <div>
    Accomodation
  </div>
)
const Travel = () => (
  <div>
    Travel
  </div>
)

const GiftRegistry = () => (
  <div>
    GiftRegistry
  </div>
)

const RoutingComponent = () => {

  const routes = [
    {
      label: 'The Big Day',
      route: '/',
      component: Home
    },
    {
      label: 'RSVP',
      route: '/rsvp',
      component: RSVP
    },
    {
      label: 'Accomodation',
      route: '/accomodation',
      component: Accomodation
    },
    {
      label: 'Travel',
      route: '/travel',
      component: Travel
    },
    {
      label: 'Gift Registy',
      route: '/giveusstuff',
      component: GiftRegistry
    }
  ];
  return (
    <div>
      {routes.map(route => <nav key={route.route}><Link to={route.route}>{route.label}</Link></nav>)}
      {routes.map(route => <div key={route.route}><Route exact={true} path={route.route} component={route.component} /></div>)}
    </div>
  )
}

export default App;
