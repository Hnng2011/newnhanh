import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom"
import './navbar.css'


const navbar = () => {
    const location = useLocation();
    const { pathname } = location;

    const isCurrentPath = (path) => {
        return path === pathname;
    };

    return (
        <>
            <nav className='navbar'>
                <Link className='logo' to={'/'}>Logo</Link>
                <div className='dfnav'>
                    <Link className={`dflink ${isCurrentPath('/market') ? 'active' : ''}`} to={'/market'}>Marketplace</Link>
                    <Link className={`dflink ${isCurrentPath('/mint') ? 'active' : ''}`} to={'/mint'}>Mint</Link>
                    <Link className={`dflink ${isCurrentPath('/farm') ? 'active' : ''}`} to={'/farm'}>Pool</Link>
                    <Link className={`dflink ${isCurrentPath('/wtbs') ? 'active' : ''}`} to={'/wtbs'}>Want Buy/Sell</Link>
                    <Link className={`dflink ${isCurrentPath('/swap') ? 'active' : ''}`} to={'/swap'}>Leaderboard</Link>
                    <Link className={`dflink ${isCurrentPath('/profile') ? 'active' : ''}`} to={'/profile'}>Profile</Link>
                </div>


                <button className='button' type='button'>Connect Wallet </button>

            </nav >
        </>
    )
}

export default navbar