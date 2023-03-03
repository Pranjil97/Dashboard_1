import React from 'react'
import Widgets from './Widgets'
import data from '../Assets/widgetsData.js'
import UserStats1 from './UserStats1'
import UserStats2 from './UserStats2'

const DashboardData = () => {
  return (
    <div className='flex m-10 h-fit flex-col'>
      <Widgets data={data}/>
      <UserStats1/>
      <UserStats2/>
    </div>
  )
}

export default DashboardData
