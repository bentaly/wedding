import React, { Component } from 'react';
import './SiteContainer.css';
import { BrowserRouter } from 'react-router-dom';
import RoutingComponent from './RoutingComponent';
import Navigation from './Navigation';
import Home from './Home';
import RSVP from './Rsvp';
import Info from './Info';
import GiftRegistry from './GiftRegistry';
import LoginScreen from './Login';
import Admin from './Admin';

class SiteContainer extends Component {
  constructor() {
    super();
    this.state = {};
    this.routes = [
      {
        label: 'The Big Day',
        route: '/',
        component: <Home />
      },
      {
        label: 'RSVP',
        route: '/rsvp',
        component: <RSVP />
      },
      {
        label: 'Info',
        route: '/info',
        component: <Info />
      },
      {
        label: 'Gift Registry',
        route: '/giveusstuff',
        component: <GiftRegistry />
      },
      {
        route: '/admin',
        component: <Admin />
      }
    ];
  }

  componentDidMount() {
    const guest = window.localStorage.getItem('cambenweddingguest');
    this.changeGuestType(JSON.parse(guest));
  }

  changeGuestType(guest) {
    this.setState({
      guest
    });

    if (guest) {
      window.localStorage.setItem('cambenweddingguest', JSON.stringify(guest));
    }
  }

  render() {
    if (this.state.guest) {
      this.routes.map(route => {
        if (route.route === '/rsvp') {
          route.component = React.cloneElement(route.component, {
            guest: this.state.guest
          });
        }
        return route;
      });

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
