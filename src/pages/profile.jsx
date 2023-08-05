import React from 'react'
import Profile from '../components/profile'
import './profile.css'


const home = () => {
    return (
        <div>
            <div className='background'><div className='gradient'></div></div>
            <h1 className='headerprofile'>Profile</h1>
            <Profile />
        </div>
    )
}

export default home