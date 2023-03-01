import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full h-[80px] flex justify-center place-items-center space-x-[980px] bg-white border-b'>
      <div className='flex space-x-4'>
        <div className='font-semibold text-gray-500'>Dashboard</div>
        <div className='font-semibold text-gray-500'>notification</div>
        <div className='font-semibold text-gray-500'>search</div>
      </div>
      <div className='flex space-x-4'>
        <div className='font-semibold text-gray-500'>Account</div>
        <div className='font-semibold text-gray-500'>Dropdown</div>
        <div className='font-semibold text-gray-500'>Log out</div>
      </div>
    </nav>
  )
}

export default Navbar
