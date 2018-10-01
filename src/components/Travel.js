import React, { Component } from 'react';
import './Travel.css';

class Travel extends Component {
  constructor(props) {
    super(props);

    this.hotels = [
      {
        name: 'Barnsley house',
        phone: '07890 159580',
        link: '#',
        mapLink: ''
      },
      {
        name: 'Barnsley house1',
        phone: '07890 159580',
        link: '#',
        mapLink: ''
      },
      {
        name: 'Barnsley house2',
        phone: '07890 159580',
        link: '#',
        mapLink: ''
      },
      {
        name: 'Barnsley house3',
        phone: '07890 159580',
        link: '#',
        mapLink: ''
      },
      {
        name: 'Barnsley house4',
        phone: '07890 159580',
        link: '#',
        mapLink: ''
      }
    ];
  }
  render() {
    return (
      <div>
        <h2>Hotels</h2>
        <div className="hotels-container">
          {this.hotels.map(hotel => (
            <Hotel key={hotel.name} data={hotel} />
          ))}
        </div>
      </div>
    );
  }
}

class Hotel extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.data.name}</h3>
        <div>
          <span>{this.props.data.name}</span>
          MAP
        </div>
        <span>{this.props.data.name}</span>
        <a href={this.props.data.link}>{this.props.data.link}</a>
      </div>
    );
  }
}
export default Travel;
