import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function UserDashboard() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in 
    const token = localStorage.getItem('token');
    if (!token) {
      // Redirect to login if no token exists
      navigate('/login');
      return;
    }

    // Get username from localStorage 
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    } else {
      setUsername("User"); 
    }
  }, [navigate]);

  // Handle logout
  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    
    // Redirect to login page
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Dashboard</h2>
        
        <div className="text-center mb-8">
          <p className="text-xl text-gray-700">Hello, {username}!</p>
        </div>
        
        {/* dashboard conten */}
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <p className="text-gray-600">Welcome to your dashboard. This is where you can manage your account and access your data.</p>
        </div>
        
        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-700 text-white text-lg py-3 rounded-md transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default UserDashboard;