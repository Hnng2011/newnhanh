import React from 'react'
import './market.css'

const displayNFT = ({ id, name, address, price, url }) => {
    return (
        <div className='NFT'>
            <img className='NFTimg' src={url} alt={name} />
            <div className='NFTinfo'>
                <h2>Name: {name}</h2>
                <h2>ID: {id}</h2>
            </div>

            <h3 className='NFTowner'>Owner: {address}</h3>
            <div className='NFTbuy'>
                <h4 className='NFTprice'>Price : {price}</h4>
                <button className='NFTbuttonbuy'>Buy</button>
            </div>

        </div>
    )
}

export default displayNFT