import React from 'react'
import Dashboard from './Dashboard'
import Navigation from './Navigation'
import TopBar from './TopBar'

function Home() {
    return (
        <div className='w-full min-h-screen flex'>
            <Navigation />
            <div className='w-full flex flex-col'>
                <TopBar />
                <Dashboard />
            </div>
        </div>
    )
}

export default Home