import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate from react-router-dom
import '../../App.css'; // Correct CSS import

function Login({ handleLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // useNavigate hook for redirection

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate authentication based on email or password
    if (email === 'admin@gmail.com' && password === 'admin') {
      handleLogin('admin'); // Set role as admin
      navigate('/admin'); // Redirect to admin dashboard
    } else if (email === 'user@gmail.com' && password === 'user') {
      handleLogin('user');  // Set role as user
      navigate('/user'); // Redirect to user dashboard
    } else {
      alert('Invalid login credentials');
    }
  };

  return (
    <div className="main-container">
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="form-footer">
          <p>Don't have an account? <a href="/register">Register</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
