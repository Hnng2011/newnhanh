import React from 'react'
import './marketplace.css'
import DisplayNFT from '../components/Market/displayNFT'

const datas = [
    { id: 166999, name: 'Sa Mac', address: 'null', price: 0.05, url: '' },
    { id: 1664, name: 'Hoang Sa', address: 'null', price: 0.05, url: '' },
    { id: 1662, name: 'Truong sa', address: '0x657888B7eCBEF11bb4c446C6a1d61FF979468c70', price: 0.05, url: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Spratly_Island.png ' },
    { id: 1662, name: 'Truong sa', address: '0x657888B7eCBEF11bb4c446C6a1d61FF979468c70', price: 0.05, url: '' },
    { id: 1662, name: 'Truong sa', address: '0x657888B7eCBEF11bb4c446C6a1d61FF979468c70', price: 0.05, url: '' },
]

const home = () => {
    return (
        <div>
            <div className='background'><div className='gradient'></div></div>
            <h1 className='headermarket'>Market Place</h1>
            <div className='marketplace'>
                {datas.map((data) => {
                    return <DisplayNFT key={data.id} {...data} />
                })}
            </div>
        </div>
    )
}

export default home