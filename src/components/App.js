import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutingComponent from './RoutingComponent';
import Navigation from './Navigation';
import Home from './Home';
import RSVP from './Rsvp';
import Accomodation from './Accomodation';
import Travel from './Travel';
import GiftRegistry from './GiftRegistry';

class App extends Component {
  constructor() {
    super();

    this.routes = [
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
        label: 'Gift Registry',
        route: '/giveusstuff',
        component: GiftRegistry
      }
    ];
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <header className="app-header">
            <h1 className="app-title">
              <span>Camila</span>
              <span>and</span>
              <span>Benjamin</span>
            </h1>
            <Navigation routes={this.routes} />
          </header>
          <RoutingComponent routes={this.routes} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
