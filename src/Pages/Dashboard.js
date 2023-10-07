import React from 'react';
import Navbar from '../components/Navbar';
import UserProfieCard from '../components/UserProfieCard';
import RecentTrips from '../components/RecentTrips';
import RecommendedDestinations from '../components/RecommendedDestinations';
import { useUser } from '../context/Users.context';

function Dashboard() {
  const { isSidebarOpen, setSidebarOpen } = useUser();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`flex h-screen `}>

      <main className={`flex-1 p-4 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="container mx-auto mt-6 px-4">
          <UserProfieCard />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <RecentTrips />
            <RecommendedDestinations />
          </div>
        </div>
      </main>

    </div>
  );
}

export default Dashboard;
