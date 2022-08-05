import React from 'react'

function Header() {
    return (
        <div className='w-full h-12 flex bg-black bg-opacity-90 text-white'>
            <div className='w-full h-full flex items-center justify-between px-4'>
                <div className='flex'>
                    <h1>Your Logo</h1>
                </div>
                <div className='flex'>
                    <h1>Nav location</h1>
                </div>
            </div>
        </div>
    )
}

export default Header