import React, { Component } from 'react';
import './GiftRegistry.css';

class GiftRegistry extends Component {
  goToPrezola() {
    window.open('https://prezola.com/wishlists/10193975/', '_blank');
  }

  render() {
    return (
      <div className="main-content">
        <p>
          Sharing the happiness of our wedding day with you is all we ask for,
          but if you wish to give us a gift, we would be grateful for a
          contribution towards an epic honeymoon.
        </p>

        <button onClick={this.goToPrezola.bind(this)}>
          Go to gift registry
        </button>
      </div>
    );
  }
}

export default GiftRegistry;
