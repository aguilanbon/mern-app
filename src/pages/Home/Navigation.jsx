import React from 'react'
import Links from './Links'

function Navigation() {
  return (
    <div className='md:w-72 bg-primary flex'>
        <div className='w-full flex flex-col'>
            <div className='w-full h-auto flex flex-col items-center justify-center mt-4'>
                <div className='mb-2'>
                    <img src="./aloy.jpg" alt="" className='h-10 w-10 object-cover rounded-full border-2 border-green-200' />
                </div>
                <div className='md:flex hidden items-center justify-center'>
                    <h2 className='text-white text-sm font-bold'>Aloy Zero</h2>
                    <p className='ml-2 text-sm flex text-gray-400 before:content-["|"] before:w-1 before:h-2 before:mr-2'>Admin</p>
                </div>
            </div>
            <div className='h-full flex flex-col justify-between'>
                <div className='w-full h-auto flex'>
                    <Links />
                </div>
                <div className='flex w-full items-center md:justify-start justify-center'>
                    <button className='w-auto h-8 flex items-center px-4 md:pl-20 mb-8 text-white rounded-md bg-primary hover:bg-secondary'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="md:h-4 md:w-4 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <p className='ml-2 text-xs md:flex hidden'>Log Out</p>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navigation