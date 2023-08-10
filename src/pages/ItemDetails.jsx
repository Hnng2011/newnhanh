import React, { useState } from 'react';
import PageTitle from '../components/pagetitle/PageTitle';
import { Link } from 'react-router-dom';
import img1 from '../assets/images/item-details.jpg'

import CardModal from '../components/layouts/CardModal';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import avtd1 from '../assets/images/author/author-detail-1.png'




function ItemDetails02(props) {
    const [modalShow, setModalShow] = useState(false);

    const [tabDetails] = useState([
        {
            id: 1,
            heading: 'Current Owner',
            avt: avtd1,
            name: 'Surrogatess'

        }
    ])



    return (
        <div>

            <PageTitle sub='Explore' title='Item Details' />
            <section className="tf-item-detail">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tf-item-detail-inner style-2">
                                <div className="image">
                                    <img src={img1} alt="Splittingme" />
                                </div>
                                <div className="content">
                                    <div className="content-top">


                                    </div>
                                    <h2 className="title-detail">Wicked Cranium #4449</h2>
                                    <p className="except">A Collection Of 10,000 Undead NFTs Minted On The Ethereum Blockchain. Each Unique Deadfella Is Randomly Generated From A Combination.</p>
                                    <div className="current-bid">
                                        <div className="countdown style-2">
                                            <span className="js-countdown">Available: 50</span>
                                        </div>
                                        <div className="change-price">
                                            <span className="title">Current Price</span>
                                            <div className="price">
                                                <span>4.89 ETH</span>
                                                <span>= $12.246</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Tabs className="tf-tab">
                                        <TabList className="menu-tab ">
                                            <Tab className="tab-title active"><Link to="#">Details</Link></Tab>
                                        </TabList>

                                        <TabPanel >
                                            <div className="tab-details">
                                                <div className="top">

                                                    {
                                                        tabDetails.map(idx => (
                                                            <div key={idx.id} className="author">
                                                                <div className="heading">{idx.heading}</div>
                                                                <div className="infor">
                                                                    <img src={idx.avt} alt="Splittingme" />
                                                                    <h6 className="name">{idx.name}</h6>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }

                                                </div>

                                            </div>
                                        </TabPanel>


                                    </Tabs>

                                    <div className="content-bottom">

                                        <div className="button">
                                            <Link to="#" className="tf-button" onClick={() => setModalShow(true)}>Purchase</Link>
                                            <Link to="#" className="tf-button" onClick={() => setModalShow(true)}>Offer</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





            <CardModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />


        </div >
    );
}

export default ItemDetails02;