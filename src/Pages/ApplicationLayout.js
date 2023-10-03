import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import { useUser } from '../context/Users.context'

export default function ApplicationLayout() {
    const {isSidebarOpen}  = useUser();
  return (
    <div className={`${isSidebarOpen ? 'overflow-hidden' : ''}`}>
        {isSidebarOpen && <Sidebar />}
        <Outlet/>
    </div>
  )
}
