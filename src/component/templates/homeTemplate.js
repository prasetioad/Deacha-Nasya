import React from 'react'
import Navbar from '../atoms/Navbar'
import Home from '../organism/home/homHeader'
import HomeBar from '../organism/home/homeNavbar'
import HomeBody from '../organism/home/homeBody'

function Index() {
    return (
        <div>
            <Navbar />
            <Home />
            <HomeBar />
            <HomeBody />
            <p>Here Footer</p>
        </div>
    )
}

export default Index
