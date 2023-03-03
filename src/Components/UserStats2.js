import React from 'react'
import tickicon from '../Assets/tickicon.png'

const UserStats2 = () => {
  return (
    <div className='flex h-[480px] w-full mt-[50px] gap-[30px]'>
      <div className='bg-white w-[760px] h-[450px] border-2 flex flex-col justify-start place-items-start p-4 font-base'>
        <h1 className='text-2xl text-black opacity-80'>2017 Sales</h1>
        <p className='text-sm text-gray-400'>All products including Taxes</p>
        <div className='w-full h-[375px] border-b flex justify-center place-items-center'>Tab graph</div>
        <div className='text-sm text-gray-400 mt-3 flex gap-1'>
            <img src={tickicon} alt='icon' className='h-[20px]'></img>
            <div className='text-[15px] font-normal'>Data information certified</div>
        </div>
      </div>
      <div className='bg-white w-[705px]  border-2 flex flex-col justify-start place-items-start p-4'>
        <h1 className='text-2xl text-black opacity-80'>Tasks</h1>
        <p className='text-sm text-gray-400'>Backend development</p>
        <div className='w-full h-[380px] border-b flex justify-center place-items-center'>checkbox data</div>
        <div className='text-sm text-gray-400 mt-3 flex gap-1'>
            <div className='text-[15px] font-normal'>Updated 3 minutes ago</div>
        </div>
      </div>
    </div>
  )
}

export default UserStats2
