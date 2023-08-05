import React from 'react'
import './market.css'

const displayNFT = ({ id, name, address, price, url }) => {
    return (
        <div className='NFT'>
            <img className='NFTimg' src={url} alt={name} />
            <h4 className='NFTname'>Name: {name}</h4>
            <h4 className='NFTid'>ID: {id}</h4>
            <h4 className='NFTowner'>Owner: {address}</h4>
            <h4 className='NFTprice'>Price : {price}</h4>
            <button className='NFTbuttonbuy'>Buy</button>
        </div>
    )
}

export default displayNFT