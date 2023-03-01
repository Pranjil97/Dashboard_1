import React from 'react'

const Dashboard = () => {
  return (
    <div className=' min-h-screen bg-red-300 flex'>
      <aside className='bg-blue-100 w-[350px]'>This is the sidebar</aside>
      <div className='bg-green-200 w-screen'>
        <nav className='bg-yellow-100 h-[80px]'>This is the navbar</nav>
        <div className='bg-purple-200 min-h-screen '>This is the Home Date</div>
      </div>
    </div>
  )
}

export default Dashboard
