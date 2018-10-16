import React, { Component } from 'react';
import Select from 'react-select';
import AsyncSelect from 'react-select/lib/Async';
import './Rsvp.css';

class RSVP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: null,
      value: '',
      guestsInGroup: [],
      isLoading: false
    };
    this.rvspOptions = [
      { value: "I'm Coming", label: "I'm Coming" },
      { value: "Can't come", label: "Can't come" }
    ];
    this.dietaryOptions = [
      'Normal people',
      'Veggie',
      'Vegan',
      'Gluten free',
      'Other (please specify)'
    ];

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getGuestsByGroup(group) {
    return window
      .fetch('/guests?group=' + group)
      .then(res => res.json())
      .catch(error => console.error(error));
  }

  userSearchChange(selectedUser) {
    this.getGuestsByGroup(selectedUser.group).then(guestsInGroup => {
      this.setState({ guestsInGroup });
    });
  }

  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  promiseOptions(inputValue) {
    this.setState({ isLoading: true });

    return window
      .fetch('/guests?like=' + inputValue)
      .then(res => res.json())
      .then(
        result => {
          this.setState({ isLoading: true });
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

  handleRsvpChange(rsvpVal, guest) {
    guest.rsvp = rsvpVal.value;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <AsyncSelect
          className="guest-select"
          placeholder="Select one of your group"
          cacheOptions
          isLoading={this.isLoading}
          onChange={this.userSearchChange.bind(this)}
          defaultOptions
          loadOptions={this.promiseOptions.bind(this)}
        />
        {this.state.guestsInGroup.map(guest => {
          return (
            <div className="guest-row" key={guest._id}>
              <label>{guest.name}</label>
              <Select
                placeholder="You coming?"
                isClearable={false}
                isSearchable={false}
                onChange={value => this.handleRsvpChange(value, guest)}
                name="rsvp-value"
                options={this.rvspOptions}
              />
              {guest.rsvp && (
                <Select
                  defaultValue={this.dietaryOptions[0]}
                  isClearable={false}
                  isSearchable={false}
                  // onChange={this.handleChange}
                  name="dietary-value"
                  options={this.dietaryOptions}
                />
              )}
            </div>
          );
        })}
        {/*
        <div>
          I am excited to confirm I will be joining your wedding celebration on
          May 19th. After the ceremony at St. Mary’s Church, I will need a lift
          to Cripps Barn. Please tell the chef to prepare some tasty vegan food,
          so I can party all night long.
        </div>
        <button type="submit">Submit</button> */}
      </form>
    );
  }
}

export default RSVP;
