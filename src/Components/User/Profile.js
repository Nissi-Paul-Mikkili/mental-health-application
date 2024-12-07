import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

function Profile() {
  const [profileData, setProfileData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userEmail = JSON.parse(localStorage.getItem('user')).email; // Get user email from localStorage
        const response = await axios.get(`http://localhost:8080/api/users/profile/${userEmail}`);
        setProfileData(response.data);
      } catch (error) {
        setErrorMessage('Error fetching profile data.');
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.clear(); // Clear user data from localStorage
    navigate('/login'); // Redirect to the login page
  };

  return (
    <div className="profile-container">
      <h1 className="profile-title">My Profile</h1>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {profileData ? (
        <table className="profile-table">
          <tbody>
            <tr>
              <th>Name</th>
              <td>{profileData.name}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{profileData.email}</td>
            </tr>
            <tr>
              <th>Role</th>
              <td>{profileData.role}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        !errorMessage && <p>Loading profile data...</p>
      )}
      <button onClick={handleLogout} className="logout-btn">
        Logout
      </button>
    </div>
  );
}

export default Profile;
