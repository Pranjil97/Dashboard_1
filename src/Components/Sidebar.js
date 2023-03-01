import React from 'react'
import spartan from '../Assets/spartanicon.png'

const Sidebar = () => {
  return (
    <aside id='sidebar' className=' w-[300px] flex flex-col space-y-[30px]'>
      <div className=' h-[80px] w-full flex justify-center place-items-center border-b border-gray-500'>
        <img src={spartan} alt='spartan'></img>
        <span className='text-white uppercase'>pranjil</span>
      </div>
      <div className='w-full h-[35px] text-gray-200 opacity-70 hover:bg-gray-500 hover:opacity-100 hover:text-white flex justify-center place-items-center cursor-pointer rounded-2xl font-bold'>Dashboard</div>
      <div className='w-full h-[35px] text-gray-200 opacity-70 hover:bg-gray-500 hover:opacity-100 hover:text-white flex justify-center place-items-center cursor-pointer rounded-2xl font-bold'>User Profile</div>
      <div className='w-full h-[35px] text-gray-200 opacity-70 hover:bg-gray-500 hover:opacity-100 hover:text-white flex justify-center place-items-center cursor-pointer rounded-2xl font-bold'>Table List</div>
      <div className='w-full h-[35px] text-gray-200 opacity-70 hover:bg-gray-500 hover:opacity-100 hover:text-white flex justify-center place-items-center cursor-pointer rounded-2xl font-bold'>Notification</div>
    </aside >
  )
}

export default Sidebar
