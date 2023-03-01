import React from 'react'
import Widgets from './Widgets'
import data from '../Assets/widgetsData.js'

const DashboardData = () => {
  return (
    <div className='flex m-16 space-x-8'>
      <Widgets data={data}/>
    </div>
  )
}

export default DashboardData
