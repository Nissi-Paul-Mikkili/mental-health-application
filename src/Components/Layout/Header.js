import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import './Header.css';

function Header({ userRole, isLoggedIn, handleLogout }) {

  const navigate = useNavigate();

  const handleLogoutAndRedirect = () => {
    handleLogout();   // Call the logout handler from App.js
    navigate('/login');  // Redirect to login page
  };

  return (
    <header>
      <nav>
        <ul>
            {/* Show login link if user is not logged in */}
            {!isLoggedIn && <li><Link to="/login">Login</Link></li>}
          
            {/* Conditionally render the User Dashboard link only for regular users */}
            {isLoggedIn && userRole === 'user' && <li><Link to="/user">User Dashboard</Link></li>}

            {/* Conditionally render the Admin Dashboard link only for admins */}
            {isLoggedIn && userRole === 'admin' && <li><Link to="/admin">Admin Dashboard</Link></li>}

            {/* Hide the Register link if the user is logged in */}
            {!isLoggedIn && <li><Link to="/register">Register</Link></li>}

            {/* Show logout link when logged in */}
            {isLoggedIn && (
              <li>
                <button onClick={handleLogoutAndRedirect}>Logout</button>
              </li>
            )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
