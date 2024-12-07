import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import './TherapySessions.css';

function TherapySessions() {
  const [therapistName, setTherapistName] = useState('');
  const [sessionTime, setSessionTime] = useState(null);
  const [therapists, setTherapists] = useState([]);

  useEffect(() => {
    const fetchTherapists = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/users/therapists');
        setTherapists(response.data);
      } catch (error) {
        console.error('Error fetching therapists:', error);
      }
    };
    fetchTherapists();
  }, []);

  const handleSchedule = (e) => {
    e.preventDefault();
    if (!therapistName || !sessionTime) {
      alert('Please fill out all fields.');
      return;
    }
    const newSession = { id: Date.now(), therapistName, sessionTime };
    const currentSessions = JSON.parse(localStorage.getItem('therapySessions')) || [];
    localStorage.setItem('therapySessions', JSON.stringify([...currentSessions, newSession]));

    setTherapistName('');
    setSessionTime(null);
    alert('Therapy session scheduled successfully!');
  };

  return (
    <div className="therapy-sessions-container">
      <h1 className="page-title">Schedule Your Therapy Session</h1>
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
