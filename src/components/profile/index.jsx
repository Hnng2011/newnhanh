import { useState } from 'react'
import './profile.css'

const index = () => {
    const [user, setUser] = useState({
        name: 'Tommy Tèo',
        address: '0x657888B7eCBEF11bb4c446C6a1d61FF979468c70',
        id: '03102002',
        balance: '1000 SPT',
    })

    return (
        <>
            <div className='profileinfo'>
                <div>
                    <h2 className='profilename'> <strong style={{ color: '#FFFF00' }}>Name:</strong> {user.name} </h2>
                    <button className='edit'><img className='editimg' src='../../../public/note-svgrepo-com.svg' /></button>
                </div>

                <h2 className='profileadd'><strong style={{ color: '#FFFF00' }}>Address:</strong>{user.address}</h2>
                <h2 className='profileid'> <strong style={{ color: '#FFFF00' }}>ID:</strong> {user.id}</h2>
                <h2 className='profilebalance'> <strong style={{ color: '#FFFF00' }}>My Balance:</strong> {user.balance}</h2>
            </div >
        </>
    )
}

export default index