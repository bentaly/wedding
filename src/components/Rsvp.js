import React, { Component } from 'react';
import Select from 'react-select';
import AsyncSelect from 'react-select/lib/Async';
import './Rsvp.css';

class RSVP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guestsInGroup: [],
      numberOfCoachSpaces: 0,
      isLoading: false
    };
    this.rvspOptions = [
      { value: true, label: "I'll be there" },
      { value: false, label: "Can't come" }
    ];
    this.dietaryOptions = [
      { label: 'Anything', value: 'Anything' },
      { label: 'Veggie', value: 'Vegetarian' },
      { label: 'Vegan', value: 'Vegan' },
      { label: 'Gluten free', value: 'GF' }
    ];

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getGuestsByGroup(group) {
    this.group = group;
    return window
      .fetch('/guests?group=' + group)
      .then(res => res.json())
      .then(res => {
        this.setState({ numberOfCoachSpaces: res.length });
        return res;
      })
      .catch(error => console.error(error));
  }

  userSearchChange(selectedUser) {
    this.getGuestsByGroup(selectedUser.group).then(guestsInGroup => {
      this.setState({ guestsInGroup });
    });
  }

  handleSubmit(event) {
    this.setState({ isLoading: true });

    console.log(this.state.guestsInGroup);
    window
      .fetch('/update-guests', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          this.state.guestsInGroup.filter(guest => guest.name)
        )
      })
      .then(() =>
        this.setState({
          isLoading: false,
          submitted: true
        })
      );
    event.preventDefault();
  }

  getGuestOptions(inputValue) {
    this.setState({ isLoading: true });

    return window
      .fetch('/guests?like=' + inputValue)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoading: false
          });

          return result.map(guest => {
            return {
              value: guest.name,
              label: guest.name,
              group: guest.group
            };
          });
        },
        error => console.error(error)
      );
  }

  handleRsvpChange(attr, rsvpVal, guest) {
    guest[attr] = Array.isArray(rsvpVal)
      ? rsvpVal.map(val => val.value)
      : rsvpVal.value;
    const updatedState = {
      guestsInGroup: this.state.guestsInGroup.map(guestInGroup => {
        if (guestInGroup._id === guest._id) {
          return guest;
        } else {
          return guestInGroup;
        }
      })
    };

    if (attr === 'rsvp') {
      updatedState.numberOfCoachSpaces = this.state.guestsInGroup.filter(
        guestInGroup => guestInGroup.rsvp
      ).length;
    }

    this.setState(updatedState);
  }

  addGuest() {
    this.state.guestsInGroup.push({
      _id: Math.random(),
      new: true,
      group: this.group
    });
    this.setState({ guestsInGroup: this.state.guestsInGroup });
  }

  updateGuestName(e, guest) {
    guest.name = e.target.value;
    this.setState({
      guestsInGroup: this.state.guestsInGroup.map(guestInGroup => {
        if (guestInGroup._id === guest._id) {
          return guest;
        } else {
          return guestInGroup;
        }
      })
    });
  }

  guestRow(guest) {
    return (
      <div className="guest-row" key={guest._id}>
        {!guest.new ? (
          <label>{guest.name}</label>
        ) : (
          <input
            className="name-entry"
            type="text"
            onChange={e => this.updateGuestName(e, guest)}
            placeholder="Enter name"
          />
        )}
        <Select
          placeholder="You coming?"
          className="rsvp-value"
          isClearable={false}
          isSearchable={false}
          onChange={value => this.handleRsvpChange('rsvp', value, guest)}
          name="rsvp-value"
          options={this.rvspOptions}
        />
        {guest.rsvp && (
          <Select
            placeholder="What food (multiple allowed)"
            isClearable={false}
            className="diet-value"
            isSearchable={false}
            isMulti
            name="dietary-value"
            onChange={value => this.handleRsvpChange('diet', value, guest)}
            options={this.dietaryOptions}
          />
        )}
      </div>
    );
  }

  coachNumberChange(e) {
    this.setState({ numberOfCoachSpaces: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <AsyncSelect
          className="guest-select"
          placeholder="Select one of your group"
          cacheOptions
          isLoading={this.state.isLoading}
          onChange={this.userSearchChange.bind(this)}
          defaultOptions
          loadOptions={this.getGuestOptions.bind(this)}
        />
        {this.state.isLoading && <div className="loading">Loading</div>}
        {this.state.guestsInGroup.length > 0 && (
          <div className="guest-rows-container">
            {this.state.guestsInGroup.map(guest => this.guestRow(guest))}
            <a href="#" onClick={this.addGuest.bind(this)}>
              + Add another guest
            </a>
            <div>
              We will need{' '}
              <input
                type="number"
                onChange={this.coachNumberChange.bind(this)}
                value={this.state.numberOfCoachSpaces}
              />{' '}
              spaces in the coach going from the church to Cripps
            </div>
            <button type="submit">Submit</button>
          </div>
        )}
      </form>
    );
  }
}

export default RSVP;
