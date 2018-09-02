import React, { Component } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div className="navigation-container">
        {this.props.routes.map(route => (
          <nav key={route.route}>
            <Link to={route.route}>{route.label}</Link>
          </nav>
        ))}
      </div>
    );
  }
}

export default Navigation;
