import React, { Component } from 'react';
import './Login.css'; 
import { Link } from 'react-router-dom'; 

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameOrEmail: '',
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle login submission logic
    console.log('Login Submitted:', this.state);
  };

  render() {
    const { usernameOrEmail, password } = this.state;

    return (
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
              Email/Username:
              <input
                type="text"
                name="usernameOrEmail"
                value={usernameOrEmail}
                onChange={this.handleChange}
                required
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                required
                className="form-input"
              />
            </label>
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        <div className="signup-container">
          <span>Don't have an account?</span>
          <Link to="/signup" className="create-account-btn">
            Create Account
          </Link>
        </div>
      </div>
    );
  }
}

export default Login;
