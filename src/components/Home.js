import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div>Home</div>
        <ImageContainer src={'http://placekitten.com/200/300'} />
      </div>
    );
  }

  imageContainer(src) {
    return <img src={src} />;
  }
}

class ImageContainer extends Component {
  render() {
    return (
      <svg height="320px" width="220px">
        <image
          xlinkHref={this.props.src}
          x="10"
          y="10"
          height="300px"
          width="200px"
        />
        <polygon points="0,0 40,0 0,40" className="triangle" />
        <polygon points="180,320 220,280 220,320" className="triangle" />
        <line x1="0" y1="40" x2="40" y2="0" />
        <line x1="180" y1="320" x2="220" y2="280" />
      </svg>
    );
  }
}

export default Home;
