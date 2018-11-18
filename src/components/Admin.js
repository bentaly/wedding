import React, { Component } from 'react';
import './Admin.css';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = { guests: [] };
  }

  componentDidMount() {
    window
      .fetch('/guests')
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            guests: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          console.error(error);
        }
      );
  }

  getRsvp(guest) {
    if (typeof guest.rsvp === 'undefined') {
      return '';
    } else {
      return guest.rsvp ? 'Coming' : "Can't come";
    }
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Group</th>
            <th>Coming</th>
            <th>Meal</th>
            <th># of coach spaces (group)</th>
          </tr>
        </thead>
        <tbody>
          {this.state.guests.map(guest => (
            <tr key={guest._id}>
              <td>{guest.name}</td>
              <td>{guest.group}</td>
              <td>{this.getRsvp(guest)}</td>
              <td>{(guest.diet && guest.diet.join(', ')) || ''}</td>
              <td>{guest.numberOfCoachSpacesForGroup}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Admin;
