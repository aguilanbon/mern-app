import React from 'react'

function Links() {
  return (
    <div className='w-full flex flex-col items-center text-white'>
        <ul className='w-full flex flex-col mt-20'>
            <li className='w-full'>
                <a href="/" className='w-full py-4 flex items-center justify-start pl-20 font-semibold border-r-4 border-transparent text-hoversecondary text-sm hover:border-r-secondary hover:bg-gradient-to-l hover:from-hoverprimary'>Dashboard</a>
            </li>
            <li className='w-full'>
                <a href="/" className='w-full py-4 flex items-center justify-start pl-20 font-semibold border-r-4 border-transparent text-hoversecondary text-sm hover:border-r-secondary hover:bg-gradient-to-l hover:from-hoverprimary'>Events</a>
            </li>
            <li className='w-full'>
                <a href="/" className='w-full py-4 flex items-center justify-start pl-20 font-semibold border-r-4 border-transparent text-hoversecondary text-sm hover:border-r-secondary hover:bg-gradient-to-l hover:from-hoverprimary'>Employees</a>
            </li>
            <li className='w-full'>
                <a href="/" className='w-full py-4 flex items-center justify-start pl-20 font-semibold border-r-4 border-transparent text-hoversecondary text-sm hover:border-r-secondary hover:bg-gradient-to-l hover:from-hoverprimary'>Reports</a>
            </li>
            <li className='w-full'>
                <a href="/" className='w-full py-4 flex items-center justify-start pl-20 font-semibold border-r-4 border-transparent text-hoversecondary text-sm hover:border-r-secondary hover:bg-gradient-to-l hover:from-hoverprimary'>Settings</a>
            </li>
        </ul>
    </div>
  )
}

export default Links