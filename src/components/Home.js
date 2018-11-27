import React, { Component } from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';
import icon1 from '../../public/images/icon_1.png';
import icon2 from '../../public/images/icon_2.png';
import bg from '../../public/images/bg.jpg';

class Home extends Component {
  render() {
    return (
      <div className="home-section">
        <img src={bg} />
        <div className="main-content">
          <ThePlan />
          <NavLink className="rsvp-button" to={'/rsvp'}>
            <button>
              RSVP
            </button>
          </NavLink>
        </div>
      </div>
    );
  }
}

class ThePlan extends Component {
  componentDidMount() {
    let planArr = [
      {
        time: '12.30',
        label: `Guests arrive at <a href='https://goo.gl/maps/tbd7Z4wmJzF2' target='_blank'>St. Mary's Church</a>`
      },
      {
        time: '13.00',
        label: 'Here comes the bride!'
      },
      {
        time: '14.30',
        label: 'Drinks and Canapes at Cripps Barn'
      },
      {
        time: '16.00',
        label: 'Lunch is served'
      },
      {
        time: '19.00',
        label: `Evening guests arrive at <a href='https://goo.gl/maps/3usJWQFTnQz' target='_blank'>Cripps Barn</a>`,
        evening: true
      },
      {
        time: '19.30',
        label: `We'll get the party started after our first dance`,
        evening: true
      },
      {
        time: '21.00',
        label: 'Late night bites',
        evening: true
      },
      {
        time: '1.00',
        label: `<a href='/info?open=taxis'>Carriages</a>`,
        evening: true
      }
    ];

    const guest = window.localStorage.getItem('cambenweddingguest');
    if (JSON.parse(guest).evening) {
      planArr = planArr.filter(plan => plan.evening);
    }

    this.setState({ planArr });
  }

  render() {
    return (
      <div className="plan">
        <h3>
          The Plan
        </h3>
        {this.state && this.state.planArr.map((planItem, index) => (
          <div key={planItem.time}>
            {index ? <img src={index % 2 === 0 ? icon1 : icon2} /> : ''}
            <div className="plan-item">
              <span className="time">{planItem.time}</span>
              <span className="plan" dangerouslySetInnerHTML={{ __html: planItem.label }}/>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Home;
