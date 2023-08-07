import './wantbuyorsell.css'
import { useState } from 'react'

const datas = [1, 2, 3, 4, 5, 6]

const wantbuyorsell = () => {
    const [Mode, setMode] = useState(false)

    const handleclick = (mode) => {
        setMode((cur) => cur = mode)
    }

    const classNames = `${Mode ? 'wantbuy' : 'wantsell avtivewanna'}`;
    const classNames2 = `${Mode ? 'wantbuy avtivewanna' : 'wantsell'}`;
    return (
        <>
            <div className='wannabutton'>
                <button onClick={() => handleclick(false)} className={classNames} >Wanna Buys ?</button>
                <button onClick={() => handleclick(true)} className={classNames2}>Wanna Sell ?</button>
            </div>

            {Mode
                ?
                (<div>
                    <form className='saleform'>
                        <div className='saleNFT'>
                            <label>Chọn NFT cần bán</label>
                            <select>
                                {datas.map((data) => { return <option value={data}>{data}</option> })}
                            </select>
                        </div>

                        <div className='priceNFT'>
                            <label>Giá bán</label>
                            <div>
                                <input
                                    type="text"
                                />
                            </div>
                            <button type="submit">Bán</button>
                        </div>
                        <img src='..' alt='nft cuar ban' />

                    </form>
                </div>)
                :
                (<div>
                    <form className='saleform'>
                        <div className='offerNFT'>
                            <label>Nhập ID NFT cần lập đơn mua</label>
                            <div>
                                <input
                                    type="text"
                                />
                            </div>
                            <button type="submit">Kiểm tra</button>
                        </div>

                        <div className='priceNFT'>
                            <label>Giá sẽ mua</label>
                            <div>
                                <input
                                    type="text"
                                />
                            </div>
                            <button type="submit">Offer</button>
                        </div>
                        <img src='..' alt='nft muon mua' />
                    </form>
                </div>)}
        </>
    )
}

export default wantbuyorsell