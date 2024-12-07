import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import UserDashboard from './Components/User/UserDashboard';
import TherapySessions from './Components/User/TherapySessions';
import AdminDashboard from './Components/Admin/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/user/therapy-sessions" element={<TherapySessions />} />
      </Routes>
    </Router>
  );
}

export default App;
