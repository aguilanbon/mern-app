import React from 'react'
import Navigation from './Navigation'
import TopBar from './TopBar'

function Home() {
    return (
        <div className='w-full min-h-screen flex'>
            <Navigation />
            <TopBar />
        </div>
    )
}

export default Home