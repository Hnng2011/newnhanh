import './market.css'

const displayNFT = ({ id, name, price, url, mode }) => {
    return (

        <>
            {!mode ?
                <>
                    <div className='NFT'>
                        <img className='NFTimg' src={url} alt={name} />
                        <h4 className='NFTname'><span>Name: </span>{name}</h4>
                        <h4 className='NFTid'><span>ID:</span> {id}</h4>
                        <h4 className='NFTprice'><span>Price :</span> {price}</h4>
                        <button className='NFTbuttonbuy'>Buy</button>
                    </div>  </>
                : (
                    <>
                        <div className='NFT my'>
                            <img className='NFTimg my' src={url} alt={name} />
                            <h4 className='NFTname my'><span>Name: </span>{name}</h4>
                            <h4 className='NFTid my'><span>ID:</span> {id}</h4>
                            <h4 className='NFTprice my'><span>Price :</span> {price}</h4>
                        </div>
                    </>

                )}
        </>
    )
}

export default displayNFT