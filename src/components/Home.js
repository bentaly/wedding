import React, { Component } from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';
import icon1 from '../../public/images/icon_1.png';
import icon2 from '../../public/images/icon_2.png';
import bg from '../../public/images/bg.jpg';
import { FormattedMessage } from 'react-intl';

class Home extends Component {
  render() {
    return (
      <div className="home-section">
        <img src={bg} />
        <div className="main-content">
          <ThePlan />
          <NavLink className="rsvp-button" to={'/rsvp'}>
            <button>
              <FormattedMessage id="common.rsvp" />
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
        key: 'plan-0'
      },
      {
        time: '13.00',
        key: 'plan-1'
      },
      {
        time: '14.30',
        key: 'plan-2'
      },
      {
        time: '16.00',
        key: 'plan-3'
      },
      {
        time: '19.00',
        key: 'plan-4',
        evening: true
      },
      {
        time: '19.30',
        key: 'plan-5',
        evening: true
      },
      {
        time: '21.00',
        key: 'plan-6',
        evening: true
      },
      {
        time: '1.00',
        key: 'plan-7',
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
          <FormattedMessage id="Home.thePlan" />
        </h3>
        {this.state && this.state.planArr.map((planItem, index) => (
          <div key={planItem.time}>
            {index ? <img src={index % 2 === 0 ? icon1 : icon2} /> : ''}
            <div className="plan-item">
              <span className="time">{planItem.time}</span>
              <FormattedMessage id={'Home.' + planItem.key}>
                {label => (
                  <span
                    className="plan"
                    dangerouslySetInnerHTML={{ __html: label }}
                  />
                )}
              </FormattedMessage>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Home;
