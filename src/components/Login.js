import React, { Component } from 'react';
import './Login.css';
import { FormattedMessage } from 'react-intl';
import AsyncSelect from 'react-select/lib/Async';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit(event) {
    this.props.submitPassword(this.state.selectedUser);
    event.preventDefault();
  }

  handleChange(selectedUser) {
    this.setState({ selectedUser });
  }

  getGuestOptions(inputValue) {
    if (inputValue) {
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
                group: guest.group,
                type: 'day' // todo
              };
            });
          },
          error => console.error(error)
        );
    }
  }

  render() {
    return (
      <div className="login-container">
        <h1>
          <FormattedMessage id="Login.welcome" />
        </h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <AsyncSelect
            className="guest-select"
            placeholder="Enter you name"
            cacheOptions
            isLoading={this.state.isLoading}
            onChange={this.handleChange.bind(this)}
            loadOptions={this.getGuestOptions.bind(this)}
          />
          <button type="submit">Submit</button>
        </form>
        {this.state.error && <div>{this.state.error}</div>}
      </div>
    );
  }
}

export default Login;
