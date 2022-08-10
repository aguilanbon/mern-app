import React from 'react'

function TopBar() {
  return (
    <div className='w-full h-12'>
        <div className='w-full h-full flex justify-between'>
            <div className='h-full flex justify-center items-center ml-4 cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary fill-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <div className='h-full flex mr-4 items-center static'>
                <input type="text" name="search" id="" className='h-10 md:w-80 py-4 px-10 text-sm border-2 rounded-full border-slate-300 bg-white' placeholder='search for anything...' />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-400 absolute ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
        </div>
    </div>
  )
}

export default TopBar