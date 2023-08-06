import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import './navbar.css'


const navbar = () => {

    const [hoverState, setHoverState] = useState({});
    const [isConnect, setisConnect] = useState(true)


    const handleHover = (linkName, isHovering) => {
        setHoverState(prevState => ({
            ...prevState,
            [linkName]: isHovering,
        }));
    };

    useEffect(() => {

    }, [])

    return (
        <>
            <nav className='navbar'>
                <Link className='logo' to={'/'}>Logo</Link>
                <div className='dfnav'>
                    <Link className='dflink' to={'/market'}>Marketplace</Link>
                    <Link className="dflink" to={'/mint'}>Mint</Link>
                    <Link className='dflink' to={'/farm'}>Pool</Link>
                    <Link className="dflink" to={'/wtbs'}>Want Buy/Sell</Link>
                    <Link className="dflink" to={'/swap'}>Leaderboard</Link>
                    {isConnect && <Link className='dflink' to={'/profile'}>Profile</Link>}
                </div>

                <div
                    className='account_btn'
                    onMouseMove={() => handleHover('account', true)}
                    onMouseLeave={() => handleHover('account', false)}
                >
                    <button type='button'>Connect Wallet </button>
                </div>

            </nav >
        </>
    )
}

export default navbar