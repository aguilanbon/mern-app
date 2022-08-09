import React from 'react'
import Links from './Links'

function Navigation() {
  return (
    <div className='md:w-60 bg-primary flex'>
        <div className='w-full flex-flex-col'>
            <div className='w-full h-auto flex flex-col items-center justify-center mt-4'>
                <div className='mb-2'>
                    <img src="./aloy.jpg" alt="" className='h-10 w-10 object-cover rounded-full border-2 border-green-200' />
                </div>
                <div className='flex items-center justify-center'>
                    <h2 className='text-white text-sm font-bold'>Aloy Zero</h2>
                    <p className='ml-2 text-sm text-gray-400 before:content-["|"] before:w-1 before:h-2 before:mr-2'>Admin</p>
                </div>
            </div>
            <div className='w-full h-auto flex'>
                <Links />
            </div>
            <div className='h-auto flex pl-20'>
                <button>Log Out</button>
            </div>
        </div>
    </div>
  )
}

export default Navigation