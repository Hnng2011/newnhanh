import React, { useState } from 'react'
import './mint.css'



const mint = () => {
    const [url, setUrl] = useState('')
    const [isAvailable, setisAvailable] = useState('')
    const [code, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setUrl(() => code)
        if (isAvailable == true) {
            console.log("Mint nè")
        }
        setisAvailable((prevState) => !prevState)
    }

    return (
        <>
            <div className='mint'>
                <img className='mintimg' src={url} alt='name' />
                <form className='form' onSubmit={handleSubmit}>
                    <label>Enter your Code: </label>
                    <div className='codeinput'>
                        <input
                            type="text"
                            value={code}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className='submit'>
                        {isAvailable ? (
                            <button className='one' type="submit">
                                Mint
                            </button>
                        ) : (
                            <button className='two' type="submit">Submit</button>
                        )}
                    </div>

                </form>
            </div>
        </>
    )
}

export default mint