import Profile from '../components/profile'
import History from '../components/profile/history'
import DisplayNFT from '../components/Market/displayNFT'
import './profile.css'
import { useContext } from 'react'

const datas = [
    { id: 1, name: 'Sa Mac', address: 'null', price: 0.05, url: '' },
    { id: 2, name: 'Hoang Sa', address: 'null', price: 0.05, url: '' },
    { id: 3, name: 'Truong sa', address: '0x657888B7eCBEF11bb4c446C6a1d61FF979468c70', price: 0.05, url: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Spratly_Island.png ' },
    { id: 4, name: 'Truong sa', address: '0x657888B7eCBEF11bb4c446C6a1d61FF979468c70', price: 0.05, url: '' },
    { id: 5, name: 'Truong sa', address: '0x657888B7eCBEF11bb4c446C6a1d61FF979468c70', price: 0.05, url: '' },
]

const home = () => {
    return (
        <>
            <h1 className='headerprofile'>Profile <span className='refcode'>My Referal Code: ádsaddsasdasdsadasda</span></h1>
            <div className='profile'>
                <Profile />
                <History />
            </div>
            <h1 className='headerprofile'>MyNFT</h1>
            <div className='myNFT'>
                {
                    datas.map((data) => { return <DisplayNFT key={data.id} {...data} mode={'myNFT'} /> })
                }
            </div>
        </>
    )
}

export default home