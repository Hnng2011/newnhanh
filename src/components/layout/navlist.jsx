import React from 'react'
import { Link } from "react-router-dom"

const navlist = (props) => {
    const routes = props.routes;

    return (
        <div className='navlist'>
            {
                routes.map((route) => { return <Link className='navlist_child' key={route.name} to={route.route} >{route.name}</Link> })
            }
        </div >
    )
}

export default navlist