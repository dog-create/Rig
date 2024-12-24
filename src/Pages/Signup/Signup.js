import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: '',
      email: '',
      phoneNumber: '',
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, and redirect to login page after registration
    console.log('Form Submitted:', this.state);
    
    // Redirect to login page after successful registration (for now, simulating success)
    this.props.history.push('/login'); // Redirect to login page
  };

  render() {
    const { companyName, email, phoneNumber, password } = this.state;

    return (
      <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
        <h2>Register</h2>
        <form onSubmit={this.handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label>
              Company Name:
              <input
                type="text"
                name="companyName"
                value={companyName}
                onChange={this.handleChange}
                required
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              />
            </label>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                required
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              />
            </label>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>
              Phone Number:
              <input
                type="tel"
                name="phoneNumber"
                value={phoneNumber}
                onChange={this.handleChange}
                required
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              />
            </label>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                required
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              />
            </label>
          </div>
          <button type="submit" style={{ marginTop: '20px', padding: '10px 20px' }}>
            Register
          </button>
        </form>

        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <p>Already have an account? <Link to="/login" style={{ color: '#007bff' }}>Login here</Link></p>
        </div>
      </div>
    );
  }
}

export default Signup;
