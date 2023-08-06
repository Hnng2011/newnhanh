import React from 'react'
import Profile from '../components/profile'
import './profile.css'
import History from '../components/profile/history'


const home = () => {
    return (
        <div>
            <div className='background'><div className='gradient'></div></div>
            <h1 className='headerprofile'>Profile</h1>
            <Profile />
            <History />
        </div>
    )
}

export default home