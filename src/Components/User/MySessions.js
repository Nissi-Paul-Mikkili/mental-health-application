import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MySessions.css';

function MySessions() {
  const [sessions, setSessions] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchUserSessions = async () => {
      try {
        const userEmail = localStorage.getItem('userEmail'); // Assuming user's email is stored in localStorage
        const response = await axios.get(`http://localhost:8080/api/sessions/user/${userEmail}`);
        setSessions(response.data);
      } catch (error) {
        console.error('Error fetching user sessions:', error);
        setErrorMessage('Failed to load your sessions.');
      }
    };

    fetchUserSessions();
  }, []);

  const handleCancel = async (id) => {
    if (window.confirm('Are you sure you want to cancel this session?')) {
      try {
        await axios.delete(`http://localhost:8080/api/sessions/${id}`);
        setSessions((prevSessions) => prevSessions.filter((session) => session.id !== id));
      } catch (error) {
        console.error('Error cancelling session:', error);
        setErrorMessage('Failed to cancel the session.');
      }
    }
  };

  return (
    <div className="my-sessions-container">
      <h1>My Therapy Sessions</h1>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {sessions.length > 0 ? (
        <table className="sessions-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Therapist</th>
              <th>Time</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session) => (
              <tr key={session.id}>
                <td>{session.id}</td>
                <td>{session.assignedTherapist || 'Not Assigned'}</td>
                <td>{new Date(session.sessionTime).toLocaleString()}</td>
                <td>{session.status}</td>
                <td>
                  <button
                    className="cancel-btn"
                    onClick={() => handleCancel(session.id)}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No scheduled sessions found.</p>
      )}
    </div>
  );
}

export default MySessions;
