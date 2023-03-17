import React from 'react'

const TableList = () => {

  const data = [
    { id: 1, name: 'John', salary: '$5000', country: 'USA', city: 'New York' },
    { id: 2, name: 'Jane', salary: '$6000', country: 'Canada', city: 'Toronto' },
    { id: 3, name: 'Bob', salary: '$4000', country: 'Australia', city: 'Sydney' },
    { id: 4, name: 'Mary', salary: '$7000', country: 'UK', city: 'London' },
    { id: 5, name: '	Dakota Rice', salary: '	$36,738', country: '	Niger', city: 'Oud-Turnhout' },
    { id: 6, name: '	Minerva Hooper', salary: '$23,789', country: 'Curaçao', city: 'Sinaai-Waas' },
  ];

  return (
    <div className='flex flex-col p-4 mx-auto gap-[30px] bg-gray-100'>
      <div className='w-[1500px] mx-auto h-fit flex border-2 flex-col items-start mt-[25px] bg-white'>
        <h1 className='capitalize  font-normal text-[24px]'>Striped Table with Hover</h1>
        <p className='text-[14px] text-gray-500 opacity-80'>Here is a subtitle for this table</p>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ padding: '12px 15px', color: '#9a9a9a', fontSize: 14 }} >ID</th>
            <th style={{ padding: '12px 15px' , color: '#9a9a9a', fontSize: 14 }}>Name</th>
            <th style={{ padding: '12px 15px' , color: '#9a9a9a', fontSize: 14 }}>Salary</th>
            <th style={{ padding: '12px 15px' , color: '#9a9a9a', fontSize: 14 }}>Country</th>
            <th style={{ padding: '12px 15px' , color: '#9a9a9a', fontSize: 14 }}>City</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id} style={{ background: index % 2 === 0 ? '#f8f8f8' : 'none'}} >
              <td style={{ padding: '12px 15px' }}>{item.id}</td>
              <td style={{ padding: '12px 15px' }}>{item.name}</td>
              <td style={{ padding: '12px 15px' }}>{item.salary}</td>
              <td style={{ padding: '12px 15px' }}>{item.country}</td>
              <td style={{ padding: '12px 15px' }}>{item.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>


      <div className='w-[1500px] mx-auto  h-fit flex p-4 flex-col items-start'>
      <h1 className='capitalize  font-normal text-[24px]'>Table on Plain Background</h1>
        <p className='text-[14px] text-gray-500 opacity-80'>Here is a subtitle for this table</p>
        <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th style={{ color: '#9a9a9a', fontSize: 14 }}>ID</th>
            <th style={{  color: '#9a9a9a', fontSize: 14 }}>Name</th>
            <th style={{ color: '#9a9a9a', fontSize: 14 }}>Salary</th>
            <th style={{  color: '#9a9a9a', fontSize: 14 }}>Country</th>
            <th style={{ color: '#9a9a9a', fontSize: 14 }}>City</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id} className="border-t-2 mt-6" >
              <td style={{ padding: '10px 15px' }}>{item.id}</td>
              <td style={{ padding: '12px 15px' }}>{item.name}</td>
              <td style={{ padding: '12px 15px' }}>{item.salary}</td>
              <td style={{ padding: '12px 15px' }}>{item.country}</td>
              <td style={{ padding: '12px 15px' }}>{item.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
    </div>
  )
}

export default TableList;
