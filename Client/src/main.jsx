import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Add RouterProvider import
import './index.css';
import Dashboard from './Dashboard';
import Signup from './Signup';
import Login from './Login';
import axios from 'axios';
import UserDashboard from './UserDashboard';

axios.defaults.baseURL = 'https://localhost:8000'
axios.defaults.withCredentials = true

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/signup',
    element: <Signup/>,
  },
  {
    path: '/login',
    element: <Login/>,
  },
  {
    path: '/userdashboard',
    element: <UserDashboard/>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
