import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/sessions');
        setSessions(response.data);
      } catch (error) {
        console.error('Error fetching sessions:', error);
      }
    };

    fetchSessions();
  }, []);

  return (
    <div className="container">
      <h1>Admin Dashboard</h1>
      <h2>Manage Therapy Sessions</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Therapist</th>
            <th>Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((session) => (
            <tr key={session.id}>
              <td>{session.id}</td>
              <td>{session.therapistName}</td>
              <td>{new Date(session.sessionTime).toLocaleString()}</td>
              <td>
                <button className='text-black'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
