import React, { Component } from 'react';

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

  render() {
    return (
      <div>
        {this.state.guests.map(guest => (
          <div key={guest._id}>{guest.name}</div>
        ))}
      </div>
    );
  }
}

export default Admin;
