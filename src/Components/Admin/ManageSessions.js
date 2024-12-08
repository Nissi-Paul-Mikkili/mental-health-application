import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ManageSessions.css';

function ManageSessions() {
  const [sessions, setSessions] = useState([]);
  const [therapists, setTherapists] = useState([]);
  const [assignedTherapists, setAssignedTherapists] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Fetch sessions and therapists data
  useEffect(() => {
    const fetchSessionsAndTherapists = async () => {
      try {
        const sessionResponse = await axios.get('http://localhost:8080/api/sessions');
        const therapistResponse = await axios.get('http://localhost:8080/api/users/therapists');
        setSessions(sessionResponse.data);
        setTherapists(therapistResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setErrorMessage('Failed to load data');
      }
    };
    fetchSessionsAndTherapists();
  }, []);

  // Approve session
  const handleApprove = async (id) => {
    try {
      await axios.put(`http://localhost:8080/api/sessions/${id}/approve`);
      setSessions((prev) =>
        prev.map((session) =>
          session.id === id ? { ...session, status: 'APPROVED' } : session
        )
      );
      setSuccessMessage('Session approved successfully.');
    } catch (error) {
      console.error('Error approving session:', error);
      setErrorMessage('Failed to approve session.');
    }
  };

  // Reject session
  const handleReject = async (id) => {
    try {
      await axios.put(`http://localhost:8080/api/sessions/${id}/reject`);
      setSessions((prev) =>
        prev.map((session) =>
          session.id === id ? { ...session, status: 'REJECTED' } : session
        )
      );
      setSuccessMessage('Session rejected successfully.');
    } catch (error) {
      console.error('Error rejecting session:', error);
      setErrorMessage('Failed to reject session.');
    }
  };

  // Assign therapist to session
  const handleAssignTherapist = async (id, therapistId) => {
    try {
      await axios.put(`http://localhost:8080/api/sessions/${id}/assign`, { therapistId });
      setAssignedTherapists((prev) => ({ ...prev, [id]: therapistId }));
      setSessions((prev) =>
        prev.map((session) =>
          session.id === id
            ? { ...session, assignedTherapist: therapistId }
            : session
        )
      );
      setSuccessMessage('Therapist assigned successfully.');
    } catch (error) {
      console.error('Error assigning therapist:', error);
      setErrorMessage('Failed to assign therapist.');
    }
  };

  return (
    <div className="manage-sessions-container">
      <h1>Manage Therapy Sessions</h1>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      <table className="sessions-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Client Name</th>
            <th>Assigned Therapist</th>
            <th>Time</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((session) => (
            <tr key={session.id}>
              <td>{session.id}</td>
              <td>{session.clientName}</td>
              <td>
                <select
                  value={assignedTherapists[session.id] || session.assignedTherapist || ''}
                  onChange={(e) =>
                    handleAssignTherapist(session.id, e.target.value)
                  }
                >
                  <option value="">Select Therapist</option>
                  {therapists.map((therapist) => (
                    <option key={therapist.id} value={therapist.name}>
                      {therapist.name}
                    </option>
                  ))}
                </select>
              </td>
              <td>{new Date(session.sessionTime).toLocaleString()}</td>
              <td>{session.status}</td>
              <td>
                <button onClick={() => handleApprove(session.id)}>Approve</button>
                <button onClick={() => handleReject(session.id)}>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageSessions;
