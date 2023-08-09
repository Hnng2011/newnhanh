import React, { useState } from 'react';
import PropTypes from 'prop-types';

import icon1 from '../assets/images/svg/icon-wallet-1.svg'
import icon2 from '../assets/images/svg/icon-wallet-2.svg'
import icon3 from '../assets/images/svg/icon-wallet-3.svg'
import icon4 from '../assets/images/svg/icon-wallet-4.svg'
import icon5 from '../assets/images/svg/icon-wallet-5.svg'
import icon6 from '../assets/images/svg/icon-wallet-6.svg'
import icon7 from '../assets/images/svg/icon-wallet-7.svg'
import icon8 from '../assets/images/svg/icon-wallet-8.svg'
import { Link } from 'react-router-dom';

Wallet.propTypes = {

};

function Wallet(props) {
    const [dataWallet] = useState([
        {
            id: 1,
            img: icon1,
            cate: '',
            title: 'Meta Mask',
            text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
        },

        {
            id: 2,
            img: icon3,
            cate: '',
            title: 'Wallet Connect',
            text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
        },
        {
            id: 4,
            img: icon4,
            cate: 'none',
            title: 'Coin Base',
            text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
        },


    ])
    return (
        <div>

            <section className="tf-page-title">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12">

                            <ul className="breadcrumbs">
                                <li><Link to="#">Pages</Link></li>
                                <li>Wallet</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </section>

            <section className="tf-connect-wallet">
                <div className="tf-container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="tf-heading style-5">
                                <h4 className="heading">Connect Your Wallet</h4>
                                <p className="sub-heading">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit. </p>
                            </div>
                        </div>
                        {
                            dataWallet.map(idx => (
                                <div key={idx.id} className="col-lg-4 col-md-6">
                                    <div className="tf-wallet">
                                        <div className="icon">
                                            <img src={idx.img} alt="SplitingMe" />
                                        </div>
                                        <h6 className="title"><Link to="#">{idx.title}</Link></h6>
                                        <p className="content">{idx.text}</p>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>

        </div>
    );
}

export default Wallet;