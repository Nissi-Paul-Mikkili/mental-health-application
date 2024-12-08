import React, { useState } from 'react';
import Profile from '../User/Profile'; // Import the Profile component
import ManageSessions from './ManageSessions'; // Import the ManageSessions component
import ManageUsers from './ManageUsers'; // Import the ManageUsers component
import './AdminDashboard.css';

function AdminDashboard() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [activeComponent, setActiveComponent] = useState('ManageSessions');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'ManageSessions':
        return <ManageSessions />;
      case 'ManageUsers':
        return <ManageUsers />;
      case 'Profile':
        return <Profile />;
      default:
        return <ManageSessions />;
    }
  };

  return (
    <div className="dashboard-container">
      <div className={`sidebar ${isSidebarVisible ? 'visible' : 'hidden'}`}>
        <span
          className={`toggle-symbol ${isSidebarVisible ? 'open' : 'closed'}`}
          onClick={() => setIsSidebarVisible(!isSidebarVisible)}
        >
          {isSidebarVisible ? '⟨' : '⟩'}
        </span>
        <h2 className="navbar-title">Admin Navigation</h2>
        <ul>
        <li
            className={activeComponent === 'Profile' ? 'active' : ''}
            onClick={() => setActiveComponent('Profile')}
          >
            Profile
          </li>
          <li
            className={activeComponent === 'ManageSessions' ? 'active' : ''}
            onClick={() => setActiveComponent('ManageSessions')}
          >
            Manage Sessions
          </li>
          <li
            className={activeComponent === 'ManageUsers' ? 'active' : ''}
            onClick={() => setActiveComponent('ManageUsers')}
          >
            Manage Users
          </li>
 
        </ul>
      </div>
      <div className={`main-content ${isSidebarVisible ? '' : 'expanded'}`}>
        {renderComponent()}
      </div>
    </div>
  );
}

export default AdminDashboard;
