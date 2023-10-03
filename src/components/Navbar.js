import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar({toggleSidebar}) {
  const navigate = useNavigate();
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-4">
            <button
            onClick={toggleSidebar} 
            className="text-gray-600 hover:text-indigo-900 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M4 6h16M4 12h8m-8 6h16"></path>
              </svg>
            </button>
            <h1 className="text-xl font-semibold">Dashboard</h1>
          </div>
          <div>
            <button onClick={() => navigate('/Layout/trip')} className="bg-indigo-900 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 focus:outline-none">
              Create Trip
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
