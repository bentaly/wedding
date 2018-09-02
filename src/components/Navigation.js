import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return <div className="navigation-container">{this.props.children}</div>;
  }
}

export default Navigation;
