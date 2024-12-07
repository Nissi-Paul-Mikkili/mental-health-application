import React, { useState } from 'react';
import TherapySessions from './TherapySessions';
import Resources from './Resources';
import SupportGroups from './SupportGroups';
import MySessions from './MySessions';
import Profile from './Profile'; // Import Profile component
import './UserDashboard.css';

function UserDashboard() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [activeComponent, setActiveComponent] = useState('TherapySessions');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'TherapySessions':
        return <TherapySessions />;
      case 'Resources':
        return <Resources />;
      case 'SupportGroups':
        return <SupportGroups />;
      case 'MySessions':
        return <MySessions />;
      case 'Profile': // New Profile case
        return <Profile />;
      default:
        return <TherapySessions />;
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
        <h2 className="navbar-title">Navigation</h2>
        <ul>
        <li
            className={activeComponent === 'Profile' ? 'active' : ''}
            onClick={() => setActiveComponent('Profile')}
          >
            Profile
          </li>
          <li
            className={activeComponent === 'TherapySessions' ? 'active' : ''}
            onClick={() => setActiveComponent('TherapySessions')}
          >
            Schedule Therapy Sessions
          </li>
          <li
            className={activeComponent === 'Resources' ? 'active' : ''}
            onClick={() => setActiveComponent('Resources')}
          >
            Mental Health Resources
          </li>
          <li
            className={activeComponent === 'SupportGroups' ? 'active' : ''}
            onClick={() => setActiveComponent('SupportGroups')}
          >
            Support Groups
          </li>
          <li
            className={activeComponent === 'MySessions' ? 'active' : ''}
            onClick={() => setActiveComponent('MySessions')}
          >
            My Scheduled Sessions
          </li>
        </ul>
      </div>
      <div className={`main-content ${isSidebarVisible ? '' : 'expanded'}`}>
        {renderComponent()}
      </div>
    </div>
  );
}

export default UserDashboard;
