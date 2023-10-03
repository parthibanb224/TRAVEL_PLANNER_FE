import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/Users.context';

function Sidebar() {
  const navigate = useNavigate();
  const {signinUser, handleLogout,selectedPhoto} = useUser();
  return (
    <aside className="w-64 bg-indigo-900 text-white h-screen fixed top-0 left-0 overflow-y-auto">
      {/* Logo */}
      <div className="p-4 text-center">
        <h1 className="text-2xl font-semibold">Travel Planner</h1>
      </div>
      <hr className="border-t border-indigo-800 my-4" />

      {/* Navigation */}
      <nav className="mt-2">
        <ul>
          <li>
            <button onClick={() => navigate('/Layout/dashboard')} className="flex items-center px-4 py-2 text-sm hover:bg-indigo-800">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
              Dashboard
            </button>
          </li>
          <li>
            <button onClick={() => navigate('/Layout/trip')} className="flex items-center px-4 py-2 text-sm hover:bg-indigo-800">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
              Trips
            </button>
          </li>
          <li>
            <button onClick={() => navigate('/Layout/destination')} className="flex items-center px-4 py-2 text-sm hover-bg-indigo-800">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 5v14M5 12h14"></path>
              </svg>
              Destinations
            </button>
          </li>
        </ul>
      </nav>
      <hr className="border-t border-indigo-800 my-4" />

      {/* Profile Info */}
      <div className="p-4 absolute bottom-9 text-center">
        <div className="flex items-center mb-4">
          <img
            src={selectedPhoto || "https://png.pngtree.com/png-clipart/20190924/original/pngtree-human-avatar-free-vector-png-image_4825373.jpg"}
            alt="User Profile"
            className="w-12 h-12 rounded-full mr-3 border-2 border-indigo-500"
          />
          <div>
            <p className="text-sm text-gray-400">Logged in as:</p>
            <p className="text-sm font-semibold">{signinUser}</p>
          </div>
        </div>
        <button onClick={handleLogout} className="flex items-center px-4 py-2 text-sm text-white hover:bg-indigo-800">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
