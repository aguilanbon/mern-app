import React from 'react'

function Links() {
  return (
    <div className='w-full flex flex-col items-center text-white'>
        <ul className='w-full flex flex-col mt-20 md:pl-16'>
            <li className='w-full'>
                <a href="/" className='w-full py-4 flex items-center md:justify-start justify-center font-semibold border-r-4 border-transparent text-hoversecondary text-sm hover:border-r-secondary hover:bg-gradient-to-l hover:from-hoverprimary'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="md:h-5 md:w-5 h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                    <p className='md:flex hidden'>Dashboard</p>
                </a>
            </li>
            <li className='w-full'>
                <a href="/" className='w-full py-4 flex items-center md:justify-start justify-center font-semibold border-r-4 border-transparent text-hoversecondary text-sm hover:border-r-secondary hover:bg-gradient-to-l hover:from-hoverprimary'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="md:h-5 md:w-5 h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className='md:flex hidden'>Events</p>
                </a>
            </li>
            <li className='w-full'>
                <a href="/" className='w-full py-4 flex items-center md:justify-start justify-center font-semibold border-r-4 border-transparent text-hoversecondary text-sm hover:border-r-secondary hover:bg-gradient-to-l hover:from-hoverprimary'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="md:h-5 md:w-5 h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <p className='md:flex hidden'>Employees</p>
                </a>
            </li>
            <li className='w-full'>
                <a href="/" className='w-full py-4 flex items-center md:justify-start justify-center font-semibold border-r-4 border-transparent text-hoversecondary text-sm hover:border-r-secondary hover:bg-gradient-to-l hover:from-hoverprimary'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="md:h-5 md:w-5 h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p className='md:flex hidden'>Reports</p>
                </a>
            </li>
            <li className='w-full'>
                <a href="/" className='w-full py-4 flex items-center md:justify-start justify-center font-semibold border-r-4 border-transparent text-hoversecondary text-sm hover:border-r-secondary hover:bg-gradient-to-l hover:from-hoverprimary'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="md:h-5 md:w-5 h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className='md:flex hidden'>Settings</p>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Links