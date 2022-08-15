import React from 'react'
import { useContext } from 'react'
import Dashboard from './Dashboard'
import Navigation from './Navigation'
import TopBar from './TopBar'
import GlobalHelperContext from '../../helpers/GlobalHelperContext'
import { useEffect } from 'react'
import { useState } from 'react'

function Home() {

    const { sideNavOpen, setSideNavOpen } = useContext(GlobalHelperContext)

    const [width, setWidth] = useState(window.innerWidth)

    const updateWidth = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', updateWidth)

        if(width < 768) setSideNavOpen(false)
    },[])

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