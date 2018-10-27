import React, { Component } from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <div className="navigation-container">
          {this.props.routes.map(route => (
            <nav key={route.route}>
              <NavLink activeClassName="active" exact to={route.route}>
                <span>{route.label}</span>
              </NavLink>
            </nav>
          ))}
        </div>
      </div>
    );
  }
}

export default Navigation;
