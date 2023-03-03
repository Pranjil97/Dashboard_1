import React from 'react'

const Footer = () => {
  return (
    <div className='h-[65px] w-full flex place-items-center p-6 border space-x-[890px]'>
        <div className='flex place-items-center gap-6 ml-[20px]'>
            <a className='cursor-pointer text-gray-400 text-[15px]'>Home</a>
            <a className='cursor-pointer text-gray-400 text-[15px]'>Company</a>
            <a className='cursor-pointer text-gray-400 text-[15px]'>Portfolio</a>
            <a className='cursor-pointer text-gray-400 text-[15px]'>Blog</a>
        </div>
        <div className='text-gray-500 text-[14px]'> © 2023 <a href='https://www.creative-tim.com/?_ga=2.236643074.2087148943.1677787123-14312549.1677182554' className='text-cyan-500'>Pranjil Kumar</a>, made with love for a better web</div>
        
    </div>
  )
}

export default Footer
