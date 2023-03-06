import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const UserProfile = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [aboutMe, setAboutMe] = useState('');

  return (
    <div className=' h-screen flex '> 
      <div className='flex h-fit gap-8 mx-auto'>
        <div className='h-[650px] w-[950px] mt-[50px] border-2'>
          <h1 className='flex p-4 text-[25px] '>Edit Profile</h1>
          <form>
            <div className='space-y-[30px] w-full'>
              <div className=' h-[75px]'>
                <div className='flex space-x-[10px]'>
                  <div className='flex flex-col justify-start place-items-start  h-[75px] p-2 '>
                    <label className='ml-[10px] uppercase'>Company(Disabled)</label>
                        <input
                          className='w-[350px] ml-[10px] mt-[4px] rounded-md h-[35px] outline-none border-2 p-2'
                          type="text"
                          id="companyname"
                          name="companyname"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                  </div>
                  <div className=' flex flex-col justify-start place-items-start h-[75px] p-2 '>
                    <label className=' uppercase'>Username</label>
                      <input
                        className='w-[230px] mt-[4px] rounded-md h-[35px] outline-none border-2 p-2'
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                  </div>
                  <div className='flex flex-col justify-start place-items-start h-[75px] p-2'>
                    <label className=' uppercase'>Email Address</label>
                    <input
                      className='w-[270px] mt-[4px] rounded-md h-[35px] outline-none border-2 p-2'
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <div></div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className='bg-purple-100 h-[75px]'>2 line</div>
              <div className='bg-purple-100 h-[75px]'>3 line</div>
              <div className='bg-purple-100 h-[75px]'>4 line</div>
              <div className='bg-purple-100 h-[75px]'>5 line</div>
              <div className='bg-purple-100 h-[55px] flex justify-end'><div className='mr-[50px]'>6 line</div></div>
            </div>
          </form>
        </div>
        <div className='h-[450px] w-[550px] mt-[50px] border-2'> This is the second best colour</div>
      </div>
    </div>
  )
}

export default UserProfile
