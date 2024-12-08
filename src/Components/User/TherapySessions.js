import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import './TherapySessions.css';

function TherapySessions() {
  const [therapistName, setTherapistName] = useState('');
  const [sessionTime, setSessionTime] = useState(null);
  const [therapists, setTherapists] = useState([]);
  const [message, setMessage] = useState({ text: '', type: '' });

  useEffect(() => {
    const fetchTherapists = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/users/therapists');
        setTherapists(response.data);
      } catch (error) {
        console.error('Error fetching therapists:', error);
        setMessage({ text: 'Failed to load therapists.', type: 'error' });
      }
    };
    fetchTherapists();
  }, []);

  const handleSchedule = async (e) => {
    e.preventDefault();

    if (!therapistName || !sessionTime) {
      setMessage({ text: 'Please fill out all fields.', type: 'error' });
      return;
    }

    const newSession = {
      clientName: 'nissi', // Replace with logged-in user's name
      sessionTime,
      status: 'PENDING',
      assignedTherapist: therapistName,
    };

    try {
      const response = await axios.post('http://localhost:8080/api/sessions', newSession);
      setMessage({ text: 'Therapy session scheduled successfully!', type: 'success' });
      console.log(response.data); // For debugging
      setTherapistName('');
      setSessionTime(null);
    } catch (error) {
      console.error('Error scheduling session:', error);
      setMessage({ text: 'Failed to schedule session.', type: 'error' });
    }
  };

  return (
    <div className="therapy-sessions-container">
      <h1 className="page-title">Schedule Your Therapy Session</h1>
      {message.text && (
        <p className={`message ${message.type}`}>{message.text}</p>
      )}
      <form onSubmit={handleSchedule} className="schedule-form">
        <div className="form-group">
          <label>Therapist Name</label>
          <select
            value={therapistName}
            onChange={(e) => setTherapistName(e.target.value)}
            className="dropdown"
            required
          >
            <option value="">Select a therapist</option>
            {therapists.map((therapist) => (
              <option key={therapist.id} value={therapist.name}>
                {therapist.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Session Time</label>
          <DatePicker
            selected={sessionTime}
            onChange={(date) => setSessionTime(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={30}
            dateFormat="MMMM d, yyyy h:mm aa"
            placeholderText="Select date and time"
            className="date-picker"
          />
        </div>
        <button type="submit" className="schedule-btn">Schedule Session</button>
      </form>
    </div>
  );
}

export default TherapySessions;
