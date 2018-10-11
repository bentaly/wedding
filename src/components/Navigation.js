import React, { Component } from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  isActive(ro) {
    return ro.route === window.location.pathname;
  }

  activeDecoration() {
    return (
      <svg height="40px" width="40px">
        <line x1="0" y1="40" x2="40" y2="0" />
        <line x1="0" y1="40" x2="40" y2="0" />
      </svg>
    );
  }

  activeBorder() {
    return (
      <svg height="40px" width="40px">
        <line x1="0" y1="40" x2="40" y2="0" />
      </svg>
    );
  }

  render() {
    return (
      <div className="navigation">
        <div className="navigation-container">
          {this.props.routes.map(route => (
            <nav key={route.route}>
              <NavLink exact to={route.route}>
                {this.isActive(route) && this.activeBorder()}
                <span>{route.label}</span>
                {this.isActive(route) && this.activeBorder()}
              </NavLink>
            </nav>
          ))}
        </div>
      </div>
    );
  }
}

export default Navigation;
