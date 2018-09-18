import React, { Component } from 'react';
import padlock from '../locked.svg';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit() {
    const guestType = this.state.value.toLowerCase();
    if (guestType === 'day' || guestType === 'evening') {
      this.props.submitPassword(this.state.value);
    } else {
      this.setState({ error: 'Incorrect password' });
    }
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
      error: null
    });
  }

  render() {
    return (
      <div className="login-container">
        <div>
          <img src={padlock} />
          <h1>Enter your password</h1>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="password" onChange={this.handleChange.bind(this)} />
            <input type="submit" value="Submit" />
          </form>
          {this.state.error && <div>{this.state.error}</div>}
        </div>
      </div>
    );
  }
}

export default Login;