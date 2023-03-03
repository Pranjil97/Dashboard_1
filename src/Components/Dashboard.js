import React, { useState } from 'react'
import DashboardData from './DashboardData'
import Footer from './Footer'
import Navbar from './Navbar'
import Notification from './Notification'
import Sidebar from './Sidebar'
import TableList from './TableList'
import UserProfile from './UserProfile'


const Dashboard = () => {
  const [page, setpage] = useState(0)
  return (
    <div className=' h-full flex'>
      <Sidebar setpage={setpage} />
      <div className='w-screen'>
        <Navbar page={page}/>
        {page==0 ? <DashboardData/> : null }
        {page==1 ? <UserProfile /> : null }
        {page==2 ? <TableList/> : null }
        {page==3 ? <Notification/> : null }
        <Footer/>
      </div>
    </div>
  )
}

export default Dashboard
