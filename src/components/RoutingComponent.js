import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Home from './Home';
import RSVP from './Rsvp';
import Accomodation from './Accomodation';
import Travel from './Travel';
import GiftRegistry from './GiftRegistry';
import Navigation from './Navigation';

class RoutingComponent extends Component {
  render() {
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
        <Navigation>
          {routes.map(route => (
            <nav key={route.route}>
              <Link to={route.route}>{route.label}</Link>
            </nav>
          ))}
        </Navigation>
        {routes.map(route => (
          <div key={route.route}>
            <Route
              exact={true}
              path={route.route}
              component={route.component}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default RoutingComponent;
