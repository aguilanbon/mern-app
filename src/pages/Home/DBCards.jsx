import React from 'react'

function DBCards() {
  return (
    <>
    <div className='xl:min-w-80 w-auto h-40 px-4 flex rounded-md border shadow-lg lg:mr-4 lg:mb-0 mb-2 hover:-translate-x-1 hover:-translate-y-1 cursor-pointer transition-all'>
        <div className='w-full flex'>
            <div className='w-3/4 flex flex-col p-2 text-gray-800'>
                <div className='h-full mb-2 flex flex-col justify-between'>
                    <h1 className='font-semibold '>Clients</h1>
                    <h1 className='font-bold md:text-5xl'>93</h1>
                    <h1 className='md:text-sm opacity-70'>Active Clients</h1>
                </div>
            </div>
            <div className='h-full flex items-center justify-end'>
                <div className='p-3 rounded-full bg-primary bg-opacity-10'>
                     <svg xmlns="http://www.w3.org/2000/svg" className="lg:h-14 lg:w-14 h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
    <div className='xl:min-w-80 w-auto h-40 px-4 flex rounded-md border shadow-lg lg:mr-4 lg:mb-0 mb-2 hover:-translate-x-1 hover:-translate-y-1 cursor-pointer transition-all'>
        <div className='w-full flex'>
            <div className='w-3/4 flex flex-col p-2 text-gray-800'>
                <div className='h-full mb-2 flex flex-col justify-between'>
                    <h1 className='font-semibold '>Events</h1>
                    <h1 className='font-bold md:text-5xl'>6</h1>
                    <h1 className='md:text-sm opacity-70'>Upcoming events</h1>
                </div>
            </div>
            <div className='h-full flex items-center justify-end'>
                <div className='p-3 rounded-full bg-orange-600 bg-opacity-20'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="lg:h-14 lg:w-14 h-8 w-8 text-orange-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
    <div className='xl:min-w-80 w-auto h-40 px-4 flex rounded-md border shadow-lg lg:mr-4 lg:mb-0 mb-2 hover:-translate-x-1 hover:-translate-y-1 cursor-pointer transition-all'>
        <div className='w-full flex'>
            <div className='w-3/4 flex flex-col p-2 text-gray-800'>
                <div className='h-full mb-2 flex flex-col justify-between'>
                    <h1 className='font-semibold '>Reports</h1>
                    <h1 className='font-bold md:text-5xl'>23</h1>
                    <h1 className='md:text-sm opacity-70'>Total reports</h1>
                </div>
            </div>
            <div className='h-full flex items-center justify-end'>
                <div className='p-3 rounded-full bg-pink-600 bg-opacity-20'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="lg:h-14 lg:w-14 h-8 w-8 text-pink-600 " viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
    <div className='xl:min-w-80 w-auto h-40 px-4 flex rounded-md border shadow-lg lg:mr-4 lg:mb-0 mb-2 hover:-translate-x-1 hover:-translate-y-1 cursor-pointer transition-all'>
        <div className='w-full flex'>
            <div className='w-3/4 flex flex-col p-2 text-gray-800'>
                <div className='h-full mb-2 flex flex-col justify-between'>
                    <h1 className='font-semibold '>Alerts</h1>
                    <h1 className='font-bold md:text-5xl'>4</h1>
                    <h1 className='md:text-sm opacity-70'>Total alerts</h1>
                </div>
            </div>
            <div className='h-full flex items-center justify-end'>
                <div className='p-3 rounded-full bg-yellow-600 bg-opacity-20'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:h-14 lg:w-14 h-8 w-8 text-yellow-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default DBCards