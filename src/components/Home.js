import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  rsvp() {}
  render() {
    return (
      <div>
        <ImageContainer src={'http://placekitten.com/200/300'} />
        <h5>Please join us for our wedding elebration on</h5>
        <img src={'http://placekitten.com/150/400'} />
        <ThePlan />
        <button onClick={this.rsvp}>RSVP</button>
      </div>
    );
  }

  imageContainer(src) {
    return <img src={src} />;
  }
}

class ThePlan extends Component {
  constructor(props) {
    super(props);

    this.planArr = [
      {
        time: '12:30',
        label: 'Guests arrive at <a href="#">St. Mary\'s Church</a>'
      },
      {
        time: '1PM',
        label: 'Here comes the bride!'
      },
      {
        time: '2:30',
        label: 'Drinks and Canapes at Cripps Barn'
      },
      {
        time: '4PM',
        label: 'Lunch is served'
      },
      {
        time: '7PM',
        label: 'Get the party started!'
      },
      {
        time: '9PM',
        label: 'Evening Snacks'
      },
      {
        time: '1AM',
        label: 'Carriages'
      }
    ];
  }

  render() {
    return (
      <div>
        <h6>The Plan</h6>
        {this.planArr.map(planItem => (
          <div key={planItem.time}>
            <span className="time">{planItem.time}</span>
            <span
              className="plan"
              dangerouslySetInnerHTML={{ __html: planItem.label }}
            />
          </div>
        ))}
      </div>
    );
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
