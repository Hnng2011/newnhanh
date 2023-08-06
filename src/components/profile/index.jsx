import React, { useState } from 'react'
import './profile.css'

const index = () => {
    const [user, setUser] = useState({
        name: 'Tommy Tèo',
        address: '0x657888B7eCBEF11bb4c446C6a1d61FF979468c70',
        id: '03102002',
    })


    return (
        <div className='profile'>
            <div className='profileinfo'>
                <div>
                    <h2 className='profilename'>Name: {user.name} </h2>
                    <button className='edit'><img className='editimg' src='../../../public/note-svgrepo-com.svg' /></button>
                </div>

                <h2>Address: {user.address}</h2>
                <h2>ID: {user.id}</h2>
            </div>
        </div>
    )
}

export default index