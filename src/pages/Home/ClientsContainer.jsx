import React from 'react'
import ClientsCard from './ClientsCard'

function ClientsContainer() {
  return (
    <div className='md:w-3/4 w-full h-auto'>
        <div className='mb-4'>
            <h1 className='font-bold text-lg opacity-80'>Clients Overview</h1>
        </div>
        <div>
            <ClientsCard />
            <ClientsCard />
            <ClientsCard />
            <ClientsCard />
            <ClientsCard />
            <ClientsCard />
            <ClientsCard />
        </div>
    </div>
  )
}

export default ClientsContainer