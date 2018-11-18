import React, { Component } from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  constructor() {
    super();
    this.state = { menuOpen: false };
  }

  render() {
    return (
      <div className="navigation">
        <div className={'navigation-container' + (this.state.menuOpen ? ' menu-open' : '')}>
          {this.props.routes.map(route => (
            <nav key={route.route}>
              <NavLink activeClassName="active" exact to={route.route} onClick={this.toggleNav.bind(this)}>
                <span>{route.label}</span>
              </NavLink>
            </nav>
          ))}

        </div>
        {this.burgerButton()}
      </div>
    );
  }

  toggleNav() {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }

  burgerButton() {
    return (
      <div
        href="#"
        className={'burger-button goto-' + (this.state.menuOpen ? 'cross' : 'burger')}
        onClick={this.toggleNav.bind(this)}
      />
    );
  }
}

export default Navigation;
