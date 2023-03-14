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
            <div className='space-y-[10px] w-full'>
              <div className=' h-[75px]'>
                <div className='flex space-x-[10px]'>
                  <div className='flex flex-col justify-start place-items-start  h-[75px] p-2 '>
                    <label className='ml-[10px] uppercase text-gray-500 opacity-90 text-[14px]'>Company(Disabled)</label>
                        <input
                          className='w-[350px] ml-[10px] mt-[4px] rounded h-[35px] outline-none border-2 p-2'
                          type="text"
                          id="companyname"
                          name="companyname"
                          placeholder='Creative Code Inc.'
                          onChange={(e) => setUsername(e.target.value)}
                          disabled
                        />
                  </div>
                  <div className=' flex flex-col justify-start place-items-start h-[75px] p-2 '>
                    <label className=' uppercase text-gray-500 opacity-90 text-[14px]'>Username</label>
                      <input
                        className='w-[230px] mt-[4px] rounded h-[35px] outline-none border-2 p-2'
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                      />
                  </div>
                  <div className='flex flex-col justify-start place-items-start h-[75px] p-2'>
                    <label className=' uppercase text-gray-500 opacity-90 text-[14px]'>Email Address</label>
                    <input
                      className='w-[290px] mt-[4px] rounded h-[35px] outline-none border-2 p-2'
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
              
              </div>
              <div className=' h-[90px] flex'>
                <div className=' w-full flex flex-col ml-[10px] p-2 justify-start items-start '>
                  <div className='text-gray-500 opacity-90 text-[14px]'>FIRST NAME</div>
                  <input type="text" className='outline-0 border-2 h-[40px] w-full mt-2 rounded p-2'></input>
                </div>
                <div className=' w-full flex flex-col ml-[10px] p-2 justify-start items-start '>
                  <div className='text-gray-500 opacity-90 text-[14px]'>LAST NAME</div>
                  <input type="text" className='outline-0 border-2 h-[40px] w-full mt-2 rounded p-2'></input>
                </div>


              </div>
              <div className='h-[90px] uppercase flex flex-col justify-start items-start ml-[10px] p-2'>
                <div className='text-gray-500 opacity-90 text-[14px]'>address</div>
                <input type="text" className='outline-0 border-2 h-[45px] w-full mt-2 rounded p-2'></input>
              </div>



              <div className=' h-[75px]'>
                <div className='flex space-x-[10px]'>
                    <div className='flex flex-col justify-start place-items-start  h-[75px] p-2 '>
                      <label className='ml-[10px] uppercase text-gray-500 opacity-90 text-[14px]'>city</label>
                          <input
                            className='w-[350px] ml-[10px] mt-[4px] rounded h-[35px] outline-none border-2 p-2'
                            type="text"
                            id="city"
                            name="city"
                            placeholder='City'
                          />
                    </div>
                    <div className=' flex flex-col justify-start place-items-start h-[75px] p-2 '>
                      <label className=' uppercase text-gray-500 opacity-90 text-[14px]'>country</label>
                        <input
                          className='w-[230px] mt-[4px] rounded h-[35px] outline-none border-2 p-2'
                          type="text"
                          id="country"
                          name="country"
                          placeholder="Country"
                        />
                    </div>
                    <div className='flex flex-col justify-start place-items-start h-[75px] p-2'>
                      <label className=' uppercase text-gray-500 opacity-90 text-[14px]'>postal code</label>
                      <input
                        className='w-[290px] mt-[4px] rounded h-[35px] outline-none border-2 p-2'
                        type="email"
                        id="postalcode"
                        name="postalcode"
                        placeholder="Postal Code"
                      />
                    </div>
                  </div>
              </div>


              <div className= ' h-[130px] uppercase flex flex-col justify-start items-start ml-[10px] p-2'>
                <label className='uppercase text-gray-500 opacity-90 text-[14px]'>about me</label>
                <textarea className='outline-0 border-2 h-full w-full mt-2 rounded p-2 text-black' placeholder="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo. "/>
              </div>


              <div className='h-[55px] flex justify-end'>
                <button className="bg-[#1dc7ea] mr-[10px] w-[140px] text-white rounded-md h-[50px]">Update Profile</button>
              </div>
            </div>

            
          </form>
        </div>
        <div className='h-[450px] w-[550px] mt-[50px] border-2'> This is the second best colour</div>
      </div>
    </div>
  )
}

export default UserProfile
