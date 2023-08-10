import React from 'react'
import PageTitle from '../components/pagetitle/PageTitle';
import Pool from '../components/pool/pool';

const datas = [{ id: 0, name: 'BNB', APR: 5.56, Total: 118, Period: 30, url: 'https://w7.pngwing.com/pngs/997/942/png-transparent-bnb-crypto-cryptocurrency-cryptocurrencies-cash-money-bank-payment-icon.png', earn: 0 }, { id: 0, name: 'BNB', APR: 5.56, Total: 118, Period: 30, url: 'https://w7.pngwing.com/pngs/997/942/png-transparent-bnb-crypto-cryptocurrency-cryptocurrencies-cash-money-bank-payment-icon.png', earn: 0 }, { id: 1, name: 'BNB', APR: 5.56, Total: 118, Period: 30, url: 'https://w7.pngwing.com/pngs/997/942/png-transparent-bnb-crypto-cryptocurrency-cryptocurrencies-cash-money-bank-payment-icon.png', earn: 0 }]

const pool = () => {
    return (
        <div className='page-explore'>
            <PageTitle title='Pool' />

            <section className="tf-baner-live-auction style-2">
                <div className="tf-container pd32">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="banner-liver-auction-wrap">
                                <div className="content">
                                    <div className="heading">
                                        <h2 className="title">Take some NFT to stake</h2>
                                    </div>

                                    <p className="sub-heading">High APR, low risk.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <Pool datas={datas} />
            </section>
        </div>
    )
}

export default pool