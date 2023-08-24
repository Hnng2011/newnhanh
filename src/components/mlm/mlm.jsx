import React from 'react'
import './mlm.css'

const mlm = () => {
    return (
        <div className="mlm-container">
            <div className="mlm">
                <div className='outer'>
                    <div class="mlm-bg">S</div>
                    <div class="mlm-content">
                        <div className='mlm-head'>Bronze</div>
                        <div className='mlm-price'>1000$</div>
                        <div className='mlm-details'>
                            <div>Level : <span>2</span></div>
                            <div>Tokens : <span>100.100 Tokens</span></div>
                            <div>Price : <span>$0.00999/Token</span></div>
                            <div>Cap : <span> $99.9M</span></div>
                        </div>
                        <div className='mlm-buy'>
                            <button >Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mlm">
                <div className='outer'>
                    <div class="mlm-bg">S</div>
                    <div class="mlm-content">
                        <div className='mlm-head'>Silver</div>
                        <div className='mlm-price'>2000$</div>
                        <div className='mlm-details'>
                            <div>Level : <span>3</span></div>
                            <div>Tokens : <span>200.400 Tokens</span></div>
                            <div>Price : <span>$0.00998/Token</span></div>
                            <div>Cap : <span> $99.8M</span></div>
                        </div>
                        <div className='mlm-buy'>
                            <button >Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mlm">
                <div className='outer'>
                    <div class="mlm-bg">S</div>
                    <div class="mlm-content">
                        <div className='mlm-head'>Gold</div>
                        <div className='mlm-price'>4500$</div>
                        <div className='mlm-details'>
                            <div>Level : <span>4</span></div>
                            <div>Tokens : <span>452.261 Tokens</span></div>
                            <div>Price : <span>$0.00995/Token</span></div>
                            <div>Cap : <span> $99.5M</span></div>
                        </div>
                        <div className='mlm-buy'>
                            <button >Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mlm">
                <div className='outer'>
                    <div class="mlm-bg">S</div>
                    <div class="mlm-content">
                        <div className='mlm-head'>Platinum</div>
                        <div className='mlm-price'>10000$</div>
                        <div className='mlm-details'>
                            <div>Level : <span>5</span></div>
                            <div>Tokens : <span>1,010,101 Tokens</span></div>
                            <div>Price : <span>$0.0099/Token</span></div>
                            <div>Cap : <span> $99M</span></div>
                        </div>
                        <div className='mlm-buy'>
                            <button >Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mlm">
                <div className='outer'>
                    <div class="mlm-bg">S</div>
                    <div class="mlm-content">
                        <div className='mlm-head'>Basic</div>
                        <div className='mlm-price'>100$
                            <div>10$ for 10000 User</div>
                            <div></div>
                        </div>
                        <div className='mlm-details'>
                            <div>Level : <span>1</span></div>
                            <div>Tokens : <span>100.100 Tokens</span></div>
                            <div>Price : <span>$0.00999/Token</span></div>
                            <div>Cap : <span> $100M</span></div>
                        </div>
                        <div className='mlm-buy'>
                            <button >Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default mlm