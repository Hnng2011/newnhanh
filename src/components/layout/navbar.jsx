import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import Navlist from './navlist'
import './navbar.css'


const navbar = () => {

    const [hoverState, setHoverState] = useState({});
    const [isScroll, setisScroll] = useState(false)


    const handleScroll = () => {
        const scrollY = window.scrollY;

        if (scrollY > 0) {
            setisScroll(true);
        } else {
            setisScroll(false);
        }
    };

    const handleHover = (linkName, isHovering) => {
        setHoverState(prevState => ({
            ...prevState,
            [linkName]: isHovering,
        }));
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav className={isScroll ? 'navbar color' : 'navbar trans'}>
                <Link className='logo' to={'/'}>Logo</Link>

                <div
                    className='dfnav'
                    onMouseMove={() => handleHover('mint', true)}
                    onMouseLeave={() => handleHover('mint', false)}>
                    <Link className='dflink' to={'/mint'}>NFT</Link>
                    {hoverState.mint && < Navlist routes={[{ route: 'mint', name: 'Mint' }, { route: '/market', name: 'Market Place ' }]} />}
                </div>


                <div
                    className='dfnav'
                    onMouseMove={() => handleHover('swap', true)}
                    onMouseLeave={() => handleHover('swap', false)}>
                    <Link className="dflink" to={'/swap'}>Trade</Link>
                    {hoverState.swap && < Navlist routes={[{ route: 'swap', name: 'Swap' }, { route: 'addlp', name: 'ADD LP' }]} />}
                </div>


                <div
                    className='dfnav'
                    onMouseMove={() => handleHover('farm', true)}
                    onMouseLeave={() => handleHover('farm', false)}>
                    <Link className='dflink' to={'/farm'}>Earn</Link>
                    {hoverState.farm && <Navlist routes={[{ route: '/farm', name: 'Farm' }, { route: '/bal', name: 'Borrow And Lend' }]} />}
                </div>


                <div
                    className='dfnav account_btn'
                    onMouseMove={() => handleHover('account', true)}
                    onMouseLeave={() => handleHover('account', false)}
                >
                    <button type='button'>Connect Wallet </button>
                    {hoverState.account && < Navlist routes={[{ route: '/profile', name: 'Profile' }, { route: '/ldb', name: 'Leader Board' }]} />}
                </div>

            </nav >
        </>
    )
}

export default navbar