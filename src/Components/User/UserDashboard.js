import React from 'react';
import TherapySessions from './TherapySessions';
import Resources from './Resources';
import SupportGroups from './SupportGroups';
import './UserDashboard.css';

function UserDashboard() {
  return (
    <div className="container">
      <h1>User Dashboard</h1>
      <div className="dashboard">
        <div className="card">
          <TherapySessions />
        </div>
        <div className="card">
          <Resources />
        </div>
        <div className="card">
          <SupportGroups />
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
