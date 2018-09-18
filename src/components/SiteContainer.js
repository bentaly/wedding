import React, { Component } from 'react';
import './SiteContainer.css';
import { BrowserRouter } from 'react-router-dom';
import RoutingComponent from './RoutingComponent';
import Navigation from './Navigation';
import Home from './Home';
import RSVP from './Rsvp';
import Accomodation from './Accomodation';
import Travel from './Travel';
import GiftRegistry from './GiftRegistry';
import LoginScreen from './Login';

class SiteContainer extends Component {
  constructor() {
    super();
    this.state = {};
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

  componentDidMount() {
    this.changeGuestType(window.localStorage.getItem('cambenweddingguest'));
  }

  changeGuestType(guestType) {
    this.setState({
      guestType
    });
  }

  render() {
    if (this.state.guestType) {
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
    } else {
      return <LoginScreen submitPassword={this.changeGuestType.bind(this)} />;
    }
  }
}

export default SiteContainer;
