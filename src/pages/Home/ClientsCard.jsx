import React from 'react'

function ClientsCard() {
  return (
    <div className='lg:w-full w-auto h-auto cursor-pointer'>
        <div className='w-full flex items-center rounded-sm shadow-sm hover:bg-secondary text-primary h-14 p-2 text-sm transition-all'>
            <div className='flex md:mr-8 mr-4'>
                <img src="./aloy.jpg" alt="" className='w-12 h-12 rounded-full object-cover' />
            </div>
            <div className='flex md:w-1/4 w-1/3'>
                <h2 className='mr-1'>Aloy</h2>
                <h2>Zero</h2>
            </div>
            <div className='flex md:w-1/4 w-1/3'>
                <h2>Admin Assistant</h2>
            </div>
            <div className='md:flex hidden w-1/4'>
                <h2>Avocado St. Narra, Palawan</h2>
            </div>
        </div>
    </div>
  )
}

export default ClientsCard