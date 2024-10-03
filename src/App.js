import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './Components/Admin/AdminDashboard';
import UserDashboard from './Components/User/UserDashboard';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
