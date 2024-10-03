import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/user">User Dashboard</Link></li>
          <li><Link to="/admin">Admin Dashboard</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
