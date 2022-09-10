import React from 'react'
import ClientsContainer from './ClientsContainer'
import DBCards from './DBCards'

function Dashboard() {
  return (
    <div className='w-full h-auto flex flex-col'>
        <div className='w-full flex flex-col px-4 mb-8'>
            <h1 className='mt-8 text-2xl font-bold'>Welcome back, Aloy</h1>
            <h2 className='mt-4 text-lg font-semibold opacity-70'>Dashboard Overview</h2>
        </div>
        <div className='w-full flex px-4'>
            <div className='w-full flex lg:flex-row flex-col'>
                <DBCards />
            </div>
        </div>
        <div className='w-full h-auto flex flex-col mt-8 px-4'>
          <div className='w-full flex md:flex-row flex-col'>
            <ClientsContainer />
          </div>
        </div>
    </div>
  )
}

export default Dashboard