import React from 'react'
import DashboardData from './DashboardData'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Dashboard = () => {
  return (
    <div className=' min-h-screen flex bg-gray-100'>
      <Sidebar/>
      <div className='w-screen'>
        <Navbar/>
        <DashboardData/>
      </div>
    </div>
  )
}

export default Dashboard
