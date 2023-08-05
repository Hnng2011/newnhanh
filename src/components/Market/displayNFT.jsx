import React from 'react'
import './market.css'

const displayNFT = ({ id, name, address, price, url }) => {
    return (
        <div className='NFT'>
            <img className='NFTimg' src={url} alt={name} />
            <h4 className='NFTname'><span>Name: </span>{name}</h4>
            <h4 className='NFTid'><span>ID:</span> {id}</h4>
            <h4 className='NFTowner'><span>Owner:</span> {address}</h4>
            <h4 className='NFTprice'><span>Price :</span> {price}</h4>
            <button className='NFTbuttonbuy'>Buy</button>
        </div>
    )
}

export default displayNFT