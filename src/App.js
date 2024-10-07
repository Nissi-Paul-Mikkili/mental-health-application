import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AdminDashboard from './Components/Admin/AdminDashboard' // Use your existing AdminDashboard component
import UserDashboard from './Components/User/UserDashboard'   // Use your existing UserDashboard component
import Login from './Components/Auth/Login'; // Use your existing Login component
import Register from './Components/Auth/Register' // Use your existing Register component
import Header from './Components/Layout/Header'
import Footer from './Components/Layout/Footer';

function App() {
  const [userRole, setUserRole] = useState(null);  // State for storing the user role (admin/user)
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // State for login status
  

  // Function to handle login and set the user role
  const handleLogin = (role) => {
    setUserRole(role);     // Set the role (admin or user)
    setIsLoggedIn(true);   // Mark the user as logged in
  };

  // Function to handle logout and reset the user role
  const handleLogout = () => {
    setUserRole(null);     // Reset the role on logout
    setIsLoggedIn(false);  // Mark the user as logged out
  };

  return (
    <Router>
      <div className="App">
        {/* Pass role and login status to the Header */}
        <Header userRole={userRole} isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Routes>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} /> {/* Pass handleLogin to Login */}
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login handleLogin={handleLogin} />} /> {/* Default route - pass handleLogin */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;