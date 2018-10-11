import React, { Component } from 'react';

class RSVP extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.dietaryOptions = [
      'Normal people',
      'Veggie',
      'Vegan',
      'Gluten free',
      'Other (please specify)'
    ];
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Food:
            <select onChange={this.handleChange}>
              {this.dietaryOptions.map(diet => (
                <option key={diet} value={diet}>
                  {diet}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          I am excited to confirm I will be joining your wedding celebration on
          May 19th. After the ceremony at St. Mary’s Church, I will need a lift
          to Cripps Barn. Please tell the chef to prepare some tasty vegan food,
          so I can party all night long.
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default RSVP;
