import React, { Component } from 'react';
import './LogOut.css';
import logout from '../../public/images/logout.png'

class LogOut extends Component {
  componentDidMount() {
    window.localStorage.removeItem('cambenweddingguest');
    setTimeout(() => {
      window.location = '/';
    }, 3000)
  }

  render() {
    return (
      <div>
        <h2>Logging you out...</h2>
        <img src={logout} />
      </div>
    );
  }
}

export default LogOut;
