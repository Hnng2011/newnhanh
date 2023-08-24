import { useState } from 'react';
import './mint.css'


const datas = [
    { name: 'Hoang Sa', quantity: 1, token: 12, tokenname: 'HS', },
    { name: 'Truong Sa', quantity: 1, token: 11, tokenname: 'TS' },
    { name: 'Ho Chi Minh', quantity: 2, token: 14, tokenname: 'HCM' }]

const Mint = () => {
    const [mode, setMode] = useState('NFT')
    const [code, setCode] = useState('')
    const [anounce, setAnounce] = useState(false)

    const submitMint = (e) => {
        e.preventDefault();
        setAnounce(true);
        setTimeout(() => setAnounce(false), 2000);
    }

    const handleChangeMode = (mode) => {
        setMode(mode)
    }


    return (

        <div className='mint_container' >
            <div className='NFTswicthToken'>
                <button onClick={() => handleChangeMode('NFT')} className={mode === 'NFT' ? 'active_switch' : ''}>Mint NFT</button>
                <button onClick={() => handleChangeMode('Token')} className={mode === 'Token' ? 'active_switch' : ''}>Mint Token</button>
            </div>

            {
                mode === 'NFT' &&
                <form className='mint_nft' onSubmit={submitMint}>
                    <img src='https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1280x720.png' alt='Splittingme' />
                    <label htmlFor='code' className='mint_nft header'>Enter Your Code</label>
                    <input type='text' id='code' className='code' name='code' value={code} onChange={(e) => setCode(e.target.value)}></input>
                    <button type='submit'>Mint</button>
                </form>
            }

            {
                mode === 'Token' && <div className='mint_token'>
                    <div className='mint_token header'>Token Mint List</div>
                    {

                        datas.map((data) => (
                            <div className='list_mint_token' key={data.tokenname}>
                                <img src="https://lp-cms-production.imgix.net/image_browser/Ho%20Chi%20Minh%20City%20skyline.jpg?auto=format&w=1440&h=810&fit=crop&q=75" alt="splittingme" />
                                <div className='name_mint_token'>
                                    <div>NFT name:</div>
                                    <div>{data.name}</div>
                                </div>
                                <div className='quantity_mint_token_nft'>
                                    <div> NFT quantity: </div>
                                    <div>{data.quantity}</div>
                                </div>
                                <div className='quantity_mint_token'>
                                    <div> Token to claim:</div>
                                    <div>{data.quantity * data.token} {data.tokenname}</div>

                                </div>
                                <button className='mint_btn'>Mint</button>
                            </div>
                        ))

                    }
                </div>
            }

            {
                anounce && (
                    <div className='announce_mint'>
                        Đang mint, vui lòng đợi
                    </div>
                )
            }
        </div >
    )
}

export default Mint