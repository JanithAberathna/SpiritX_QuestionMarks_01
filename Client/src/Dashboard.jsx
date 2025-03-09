import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            'url(https://img.freepik.com/free-vector/abstract-secure-technology-background_23-2148331624.jpg)',
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Secure<span className='text-blue-500'>Connect</span></h1>
            <p className="mb-5">
            SecureConnect empowers you with seamless and secure communication. Experience encrypted messaging, 
            protected data and effortless connectivity all in one platform. Your privacy, our priority.
            </p>
            <button className="btn bg-blue-500 text-white" onClick={() => navigate('/signup')}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
