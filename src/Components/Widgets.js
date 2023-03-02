import React from 'react'

const Widgets = (props) => {

  let {data} = props;
  console.log(data.capacity)

  return (
    <div className='flex space-x-8'>
      {data.map((data,key)=>{
        return <div key={key} className=' h-[150px] w-[350px] flex flex-col border-2 bg-white'>
          <div className=' h-[100px] flex p-2 border-b w-[330px] mx-auto mt-[8px]'>
            <img src={data.img} alt='img' className=' w-[150px] h-[50px] mt-[8px] ml-[20px]'></img>
            <div className=' w-[700px] flex flex-col place-items-end'>
              <div className='text-gray-500 text-l'>{data.heading}</div>
              <div className='text-gray-700 text-2xl'>{data.capacity}</div>
            </div>
          </div>
          <div className="flex w-[330px] mx-auto space-x-2">
            <img src={data.icon} alt="icon" className=" h-[20px] mt-[5px] ml-[5px]"></img>
            <div className="text-sm mt-[5px] text-gray-500 text-l">{data.tool}</div>
          </div>
        </div>
      })}
    </div>
  )
}

export default Widgets
