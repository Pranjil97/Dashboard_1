import React from 'react'
import updateicon2 from '../Assets/updateicon2.png'
import clockicon from '../Assets/clockicon.png'

const UserStats1 = () => {
  return (
    <div className='flex h-[500px] w-full mt-[30px] gap-[30px]'>
      <div className='bg-white w-[965px] border-2 flex flex-col justify-start place-items-start p-4 font-base'>
        <h1 className='text-2xl text-black opacity-80'>User Behavior</h1>
        <p className='text-sm text-gray-400'>24 Hours performance</p>
        <div className='w-full h-[375px] border-b flex justify-center place-items-center'>Line Chart</div>
        <div className='text-sm text-gray-400 mt-3 flex gap-1'>
            <img src={updateicon2} alt='icon' className='h-[20px]'></img>
            <div className='text-[16px] font-normal'>Updated 3 minutes ago</div>
        </div>
      </div>
      <div className='bg-white w-[500px] h-[485px] border-2 flex flex-col justify-start place-items-start p-4'>
        <h1 className='text-2xl text-black opacity-80'>Email Statistics</h1>
        <p className='text-sm text-gray-400'>Last Campaign Performance</p>
        <div className='w-full h-[365px] border-b flex justify-center place-items-center'>Pie Chart</div>
        <div className='text-sm text-gray-400 mt-3 flex gap-1'>
            <img src={clockicon} alt='icon' className='h-[20px]'></img>
            <div className='text-[16px] font-normal'>Campaign sent 2 days ago</div>
        </div>
      </div>
    </div>
  )
}

export default UserStats1
