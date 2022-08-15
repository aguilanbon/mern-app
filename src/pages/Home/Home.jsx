import React from 'react'
import { useContext } from 'react'
import Dashboard from './Dashboard'
import Navigation from './Navigation'
import TopBar from './TopBar'
import GlobalHelperContext from '../../helpers/GlobalHelperContext'

function Home() {

    const { sideNavOpen } = useContext(GlobalHelperContext)

    return (
        <div className='w-full min-h-screen flex'>
            { sideNavOpen && <Navigation /> }
            <div className='w-full flex flex-col'>
                <TopBar />
                <Dashboard />
            </div>
        </div>
    )
}

export default Home