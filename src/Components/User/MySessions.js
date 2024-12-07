import React, { useState, useEffect } from 'react';
import './MySessions.css';

function MySessions() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const savedSessions = JSON.parse(localStorage.getItem('therapySessions')) || [];
    setSessions(savedSessions);
  }, []);

  const handleDelete = (id) => {
    const updatedSessions = sessions.filter((session) => session.id !== id);
    setSessions(updatedSessions);
    localStorage.setItem('therapySessions', JSON.stringify(updatedSessions));
  };

  return (
    <div className="my-sessions-container">
      <h1>My Therapy Sessions</h1>
      {sessions.length > 0 ? (
        <ul className="sessions-list">
          {sessions.map((session) => (
            <li key={session.id} className="session-item">
              <p><strong>Therapist:</strong> {session.therapistName}</p>
              <p><strong>Time:</strong> {new Date(session.sessionTime).toLocaleString()}</p>
              <button
                className="delete-btn"
                onClick={() => handleDelete(session.id)}
              >
                Cancel
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No scheduled sessions found.</p>
      )}
    </div>
  );
}

export default MySessions;
