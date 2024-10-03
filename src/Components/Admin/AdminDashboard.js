import React from 'react';
import ManageSessions from './ManageSessions';
import ManageResources from './ManageResources';
import './AdminDashboard.css';

function AdminDashboard() {
  return (
    <div className="container">
      <h1>Admin Dashboard</h1>
      <div className="dashboard">
        <div className="card">
          <ManageResources />
        </div>
        <div className="card">
          <ManageSessions />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
