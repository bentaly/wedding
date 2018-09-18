import React, { Component } from 'react';
import padlock from '../locked.svg';
import './Login.css';

class Login extends Component {
  handleSubmit() {
    this.props.submitPassword(this.state.value);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
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
        </div>
      </div>
    );
  }
}

export default Login;
