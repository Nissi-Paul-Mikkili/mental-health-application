import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/users/login', {
        email,
        password,
      });

      // Destructure the response data
      const { role, user, redirectUrl } = response.data;

      // Store user data in local storage
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('role', role);

      // Redirect based on the role
      navigate(redirectUrl);
    } catch (error) {
      setErrorMessage(error.response?.data || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h1 className="brand-title">Bright Mind Space</h1>
      <h2>Login</h2>
      {errorMessage && <p className="message error">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
      <div className="register-redirect">
        <p>Don't have an account? <span onClick={() => navigate('/register')}>Register</span></p>
      </div>
    </div>
  );
}

export default Login;
