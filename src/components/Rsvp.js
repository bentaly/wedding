import React, { Component } from 'react';
import Select from 'react-select';
import './Rsvp.css';

class RSVP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guestsInGroup: [],
      numberOfCoachSpaces: 0,
      isLoading: true
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
  }

  componentDidMount() {
    this.getGuestsByGroup(this.props.guest.group);
  }

  getGuestsByGroup(group) {
    this.group = group;
    return window
      .fetch('/guests?group=' + group)
      .then(res => res.json())
      .then(guestsInGroup => {
        this.transformToFE(guestsInGroup);

        this.setState({
          numberOfCoachSpaces: guestsInGroup.length,
          guestsInGroup: guestsInGroup,
          isLoading: false
        });
        return guestsInGroup;
      })
      .catch(error => console.error(error));
  }

  transformToFE(guestsInGroup) {
    guestsInGroup.map(guest => {
      if (guest.diet) {
        guest.diet = guest.diet.map(diet => {
          const dietObj = this.dietaryOptions.find(opt => opt.value === diet);
          return dietObj;
        });
      }
      if (typeof guest.rsvp !== 'undefined') {
        guest.rsvp = this.rvspOptions.find(opt => opt.value === guest.rsvp);
      }
      return guest;
    });
  }

  transformToBE(guestsInGroup) {
    const data = JSON.parse(JSON.stringify(guestsInGroup));

    data.filter(guest => guest.name)
      .map(guest => {
        guest.plusOne = guest.new;
        delete guest.new;
        guest.rsvp = guest.rsvp.value;
        guest.diet = guest.diet.map(d => d.value);
        return guest;
      });

    return data;
  }

  handleSubmit(event) {
    this.setState({ isLoading: true });
    const data = this.transformToBE(this.state.guestsInGroup);
    window
      .fetch('/update-guests', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(() =>
        this.setState({
          isLoading: false,
          submitted: true
        })
      );
    event.preventDefault();
  }

  handleRsvpChange(attr, rsvpVal, guest) {
    guest[attr] = rsvpVal;
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
          defaultValue={guest.rsvp}
          isClearable={false}
          isSearchable={false}
          onChange={value => this.handleRsvpChange('rsvp', value, guest)}
          name="rsvp-value"
          options={this.rvspOptions}
        />
        {guest.rsvp &&
          guest.rsvp.value && (
          <Select
            placeholder="What food (multiple allowed)"
            isClearable={false}
            className="diet-value"
            isSearchable={false}
            defaultValue={guest.diet}
            key={diet => diet || diet.value}
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
      <form onSubmit={this.handleSubmit.bind(this)} className="main-content">
        {this.state.isLoading && <div className="message">Loading</div>}
        {this.state.saved && <div className="message">Your changes have been saved</div> }
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
            <button type="submit">Save</button>
          </div>
        )}
      </form>
    );
  }
}

export default RSVP;
