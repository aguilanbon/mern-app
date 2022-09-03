import React from 'react'

function ClientsCard() {
  return (
    <div className='w-full h-auto'>
        <div className='w-full flex items-center rounded-sm border bg-slate-300 text-primary h-14 p-2 text-sm'>
            <div className='flex mr-8'>
                <img src="./aloy.jpg" alt="" className='w-12 h-12 rounded-full object-cover' />
            </div>
            <div className='flex w-1/4'>
                <h2 className='mr-1'>Aloy</h2>
                <h2>Zero</h2>
            </div>
            <div className='flex w-1/4'>
                <h2>Admin Assistant</h2>
            </div>
            <div className='flex w-1/4'>
                <h2>Avocado St. Narra, Palawan</h2>
            </div>
        </div>
    </div>
  )
}

export default ClientsCard