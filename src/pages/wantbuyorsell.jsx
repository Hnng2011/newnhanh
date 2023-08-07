import './wantbuyorsell.css'
import { useState } from 'react'

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
                        <div>
                            <label>Chọn NFT cần bán</label>
                            <div className='codeinput'>
                                <input
                                    type="text"
                                />
                            </div>
                        </div>

                        <div>
                            <label>Giá bán</label>
                            <div className='codeinput'>
                                <input
                                    type="text"
                                />
                            </div>
                        </div>

                        <button type="submit">Bán</button>
                    </form>
                </div>)
                :
                (<div>
                    <form className='saleform'>
                        <div>
                            <label>Chọn NFT cần offer</label>
                            <div className='codeinput'>
                                <input
                                    type="text"
                                />
                            </div>
                        </div>
                        <div>
                            <label>Nhập giá Offer</label>
                            <div className='codeinput'>
                                <input
                                    type="text"
                                />
                            </div>
                            <button type="submit">Offer</button>
                        </div>
                    </form>
                </div>)}
        </>
    )
}

export default wantbuyorsell