import React from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';
import img from '../assets/images/background/thumb-pagetitle.jpg'
import avt from '../assets/images/author/author-db.jpg'
import avt1 from '../assets/images/author/history-at1.jpg'
import avt2 from '../assets/images/author/history-at2.jpg'
import avt3 from '../assets/images/author/history-at3.jpg'
import avt4 from '../assets/images/author/history-at4.jpg'
import avt5 from '../assets/images/author/history-at5.jpg'
import avt6 from '../assets/images/author/history-at6.jpg'
import imgp1 from '../assets/images/product/product27.jpg'
import imgp2 from '../assets/images/product/product4.jpg'
import imgp3 from '../assets/images/product/product5.jpg'
import imgp4 from '../assets/images/product/product9.jpg'
import imgp5 from '../assets/images/product/product10.jpg'
import imgp6 from '../assets/images/product/product11.jpg'
import imgp7 from '../assets/images/product/product6.jpg'
import avtp1 from '../assets/images/author/avt-fv1.jpg'
import avtp2 from '../assets/images/author/avt-fv2.jpg'
import avtp3 from '../assets/images/author/avt-fv3.jpg'
import avtp4 from '../assets/images/author/avt-fv4.jpg'
import avtp5 from '../assets/images/author/avt-fv5.jpg'
import avtp6 from '../assets/images/author/avt-fv6.jpg'
import avtp7 from '../assets/images/author/avt-fv7.jpg'






Dashboard.propTypes = {

};

function Dashboard(props) {
    return (
        <div>

            <section className="tf-page-title ">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="breadcrumbs">
                                <li><Link to="/">Home</Link></li>
                                <li>Profile</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="thumb-pagetitle">
                            <img src={img} alt="images" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="tf-dashboard tf-tab">
                <div className="tf-container">
                    <Tabs className='dashboard-filter'>
                        <div className="row ">
                            <div className="col-xl-3 col-lg-12 col-md-12">
                                <div className="dashboard-user">
                                    <div className="dashboard-infor">
                                        <div className="avatar">
                                            <img src={avt} alt="images" />
                                        </div>
                                        <div className="name">Francisco Maia</div>
                                        <div className="pax">0x59485…82590</div>
                                    </div>
                                    <TabList className='filter-menuu menu-tab'>

                                        <Tab><a > <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path className="svg-fill" d="M17.3722 6.47085C17.7995 7.0155 17.3282 7.70964 16.6359 7.70964H2.66602C2.11373 7.70964 1.66602 7.26192 1.66602 6.70964V5.3513C1.66602 3.31797 3.31602 1.66797 5.34935 1.66797H7.28268C8.64102 1.66797 9.06602 2.10964 9.60768 2.83464L10.7744 4.38464C11.0327 4.7263 11.066 4.76797 11.5493 4.76797H13.8744C15.2932 4.76797 16.5581 5.43348 17.3722 6.47085Z" fill="#3749E9" />
                                            <path className="svg-fill" d="M17.3194 8.95704C17.8704 8.95704 18.3175 9.40269 18.3194 9.95365L18.3327 13.8739C18.3327 16.3323 16.3327 18.3323 13.8743 18.3323H6.12435C3.66602 18.3323 1.66602 16.3323 1.66602 13.8739V9.95724C1.66602 9.40496 2.11372 8.95725 2.666 8.95724L17.3194 8.95704Z" fill="#3749E9" />
                                        </svg> Inventory</a></Tab>

                                        <Tab><a  ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path className="svg-fill" d="M14.4916 13.0583L11.1249 10H8.86657L5.4999 13.0583C4.55823 13.9083 4.2499 15.2167 4.70823 16.4C5.16657 17.575 6.28323 18.3333 7.54157 18.3333H12.4499C13.7166 18.3333 14.8249 17.575 15.2832 16.4C15.7416 15.2167 15.4332 13.9083 14.4916 13.0583ZM11.5166 15.1167H8.48323C8.16657 15.1167 7.91657 14.8583 7.91657 14.55C7.91657 14.2417 8.1749 13.9833 8.48323 13.9833H11.5166C11.8332 13.9833 12.0832 14.2417 12.0832 14.55C12.0832 14.8583 11.8249 15.1167 11.5166 15.1167Z" fill="#3749E9" />
                                            <path className="svg-fill" d="M15.2919 3.6013C14.8335 2.4263 13.7169 1.66797 12.4585 1.66797H7.54188C6.28355 1.66797 5.16688 2.4263 4.70855 3.6013C4.25855 4.78464 4.56688 6.09297 5.50855 6.94297L8.87521 10.0013H11.1335L14.5002 6.94297C15.4335 6.09297 15.7419 4.78464 15.2919 3.6013ZM11.5169 6.0263H8.48355C8.16688 6.0263 7.91688 5.76797 7.91688 5.45964C7.91688 5.1513 8.17522 4.89297 8.48355 4.89297H11.5169C11.8335 4.89297 12.0835 5.1513 12.0835 5.45964C12.0835 5.76797 11.8252 6.0263 11.5169 6.0263Z" fill="#3749E9" />
                                        </svg> History</a></Tab>

                                        <Tab><a  ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path className="svg-fill" d="M16.2586 4.8763L11.3086 2.01797C10.5003 1.5513 9.50026 1.5513 8.68359 2.01797L3.74193 4.8763C2.93359 5.34297 2.43359 6.20964 2.43359 7.1513V12.8513C2.43359 13.7846 2.93359 14.6513 3.74193 15.1263L8.69193 17.9846C9.50026 18.4513 10.5003 18.4513 11.3169 17.9846L16.2669 15.1263C17.0753 14.6596 17.5753 13.793 17.5753 12.8513V7.1513C17.5669 6.20964 17.0669 5.3513 16.2586 4.8763ZM10.0003 6.11797C11.0753 6.11797 11.9419 6.98464 11.9419 8.05964C11.9419 9.13464 11.0753 10.0013 10.0003 10.0013C8.92526 10.0013 8.05859 9.13464 8.05859 8.05964C8.05859 6.99297 8.92526 6.11797 10.0003 6.11797ZM12.2336 13.8846H7.76693C7.09193 13.8846 6.70026 13.1346 7.07526 12.5763C7.64193 11.7346 8.74193 11.168 10.0003 11.168C11.2586 11.168 12.3586 11.7346 12.9253 12.5763C13.3003 13.1263 12.9003 13.8846 12.2336 13.8846Z" fill="#3749E9" />
                                        </svg> Account Setting</a></Tab>

                                    </TabList>


                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-12 col-md-12 overflow-table">

                                <div className="dashboard-content inventory content-tab">
                                    <TabPanel><div className="inner-content inventory favorite">
                                        <h4 className="title-dashboard">Favorirtes</h4>
                                        <div className="table-ranking top">
                                            <div className="title-ranking">
                                                <div className="col-rankingg"><Link to="#">Name</Link></div>
                                                <div className="col-rankingg"><Link to="#">Author</Link></div>
                                                <div className="col-rankingg"><Link to="#">Price</Link></div>
                                            </div>
                                        </div>
                                        <div className="table-ranking ">
                                            <div className="content-ranking">
                                                <div className="col-rankingg">
                                                    <div className="box-product-favorite">
                                                        <Link to="#" className="bookmark"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                            <path d="M12.7617 2.25H5.23828C4.42969 2.25 3.76172 2.91797 3.76172 3.76172V15.75L9 13.5L14.2383 15.75V3.76172C14.2383 2.91797 13.5703 2.25 12.7617 2.25Z" fill="#3749E9" />
                                                        </svg></Link>
                                                        <div className="image"><img src={imgp7} alt="Binasea" /></div>
                                                        <Link to="#" className="name">Sweet Baby #1</Link>
                                                    </div>
                                                </div>

                                                <div className="col-rankingg"><div className="author-pd">
                                                    <div className="avatar">
                                                        <img src={avtp1} alt="images" />
                                                    </div>
                                                    <Link to="#" className="name">Fabian Johnson</Link>
                                                </div></div>
                                                <div className="col-rankingg">0.45 Flow</div>
                                                <div className="dot"><Link to="#"><i className="fas fa-ellipsis-h"></i></Link></div>
                                            </div>
                                            <div className="content-ranking">
                                                <div className="col-rankingg">
                                                    <div className="box-product-favorite">
                                                        <Link to="#" className="bookmark"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                            <path d="M12.7617 2.25H5.23828C4.42969 2.25 3.76172 2.91797 3.76172 3.76172V15.75L9 13.5L14.2383 15.75V3.76172C14.2383 2.91797 13.5703 2.25 12.7617 2.25Z" fill="#3749E9" />
                                                        </svg></Link>
                                                        <div className="image"><img src={imgp1} alt="Binasea" /></div>
                                                        <Link to="#" className="name">Doug Ortega #1</Link>
                                                    </div>
                                                </div>
                                                <div className="col-rankingg"><div className="author-pd">
                                                    <div className="avatar">
                                                        <img src={avtp2} alt="images" />
                                                    </div>
                                                    <Link to="#" className="name">Polly Walters</Link>
                                                </div></div>
                                                <div className="col-rankingg">0.45 Flow</div>
                                                <div className="dot"><Link to="#"><i className="fas fa-ellipsis-h"></i></Link></div>
                                            </div>
                                            <div className="content-ranking">
                                                <div className="col-rankingg">
                                                    <div className="box-product-favorite">
                                                        <Link to="#" className="bookmark"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                            <path d="M12.7617 2.25H5.23828C4.42969 2.25 3.76172 2.91797 3.76172 3.76172V15.75L9 13.5L14.2383 15.75V3.76172C14.2383 2.91797 13.5703 2.25 12.7617 2.25Z" fill="#3749E9" />
                                                        </svg></Link>
                                                        <div className="image"><img src={imgp2} alt="Binasea" /></div>
                                                        <Link to="#" className="name">Vincent Welch #1</Link>
                                                    </div>
                                                </div>

                                                <div className="col-rankingg"><div className="author-pd">
                                                    <div className="avatar">
                                                        <img src={avtp3} alt="images" />
                                                    </div>
                                                    <Link to="#" className="name">Basil Slater</Link>
                                                </div></div>
                                                <div className="col-rankingg">0.45 Flow</div>
                                                <div className="dot"><Link to="#"><i className="fas fa-ellipsis-h"></i></Link></div>
                                            </div>
                                            <div className="content-ranking">
                                                <div className="col-rankingg">
                                                    <div className="box-product-favorite">
                                                        <Link to="#" className="bookmark"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                            <path d="M12.7617 2.25H5.23828C4.42969 2.25 3.76172 2.91797 3.76172 3.76172V15.75L9 13.5L14.2383 15.75V3.76172C14.2383 2.91797 13.5703 2.25 12.7617 2.25Z" fill="#3749E9" />
                                                        </svg></Link>
                                                        <div className="image"><img src={imgp3} alt="Binasea" /></div>
                                                        <Link to="#" className="name">Alec Alvarado #1</Link>
                                                    </div>
                                                </div>

                                                <div className="col-rankingg"><div className="author-pd">
                                                    <div className="avatar">
                                                        <img src={avtp4} alt="images" />
                                                    </div>
                                                    <Link to="#" className="name">Mirabelle Maldonado</Link>
                                                </div></div>
                                                <div className="col-rankingg">0.45 Flow</div>
                                                <div className="dot"><Link to="#"><i className="fas fa-ellipsis-h"></i></Link></div>
                                            </div>
                                            <div className="content-ranking">
                                                <div className="col-rankingg">
                                                    <div className="box-product-favorite">
                                                        <Link to="#" className="bookmark"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                            <path d="M12.7617 2.25H5.23828C4.42969 2.25 3.76172 2.91797 3.76172 3.76172V15.75L9 13.5L14.2383 15.75V3.76172C14.2383 2.91797 13.5703 2.25 12.7617 2.25Z" fill="#3749E9" />
                                                        </svg></Link>
                                                        <div className="image"><img src={imgp4} alt="Binasea" /></div>
                                                        <Link to="#" className="name">Baz Fletcher #1</Link>
                                                    </div>
                                                </div>

                                                <div className="col-rankingg"><div className="author-pd">
                                                    <div className="avatar">
                                                        <img src={avtp5} alt="images" />
                                                    </div>
                                                    <Link to="#" className="name">Roderick Boyd</Link>
                                                </div></div>
                                                <div className="col-rankingg">0.45 Flow</div>
                                                <div className="dot"><Link to="#"><i className="fas fa-ellipsis-h"></i></Link></div>
                                            </div>
                                            <div className="content-ranking">
                                                <div className="col-rankingg">
                                                    <div className="box-product-favorite">
                                                        <Link to="#" className="bookmark"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                            <path d="M12.7617 2.25H5.23828C4.42969 2.25 3.76172 2.91797 3.76172 3.76172V15.75L9 13.5L14.2383 15.75V3.76172C14.2383 2.91797 13.5703 2.25 12.7617 2.25Z" fill="#3749E9" />
                                                        </svg></Link>
                                                        <div className="image"><img src={imgp5} alt="Binasea" /></div>
                                                        <Link to="#" className="name">Bert Moore #1</Link>
                                                    </div>
                                                </div>

                                                <div className="col-rankingg"><div className="author-pd">
                                                    <div className="avatar">
                                                        <img src={avtp6} alt="images" />
                                                    </div>
                                                    <Link to="#" className="name">Lucy Neal</Link>
                                                </div></div>
                                                <div className="col-rankingg">0.45 Flow</div>
                                                <div className="dot"><Link to="#"><i className="fas fa-ellipsis-h"></i></Link></div>
                                            </div>
                                            <div className="content-ranking">
                                                <div className="col-rankingg">
                                                    <div className="box-product-favorite">
                                                        <Link to="#" className="bookmark"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                            <path d="M12.7617 2.25H5.23828C4.42969 2.25 3.76172 2.91797 3.76172 3.76172V15.75L9 13.5L14.2383 15.75V3.76172C14.2383 2.91797 13.5703 2.25 12.7617 2.25Z" fill="#3749E9" />
                                                        </svg></Link>
                                                        <div className="image"><img src={imgp6} alt="Binasea" /></div>
                                                        <Link to="#" className="name">Oriel Binder #1</Link>
                                                    </div>
                                                </div>

                                                <div className="col-rankingg"><div className="author-pd">
                                                    <div className="avatar">
                                                        <img src={avtp7} alt="images" />
                                                    </div>
                                                    <Link to="#" className="name">Hazel Middleton</Link>
                                                </div></div>
                                                <div className="col-rankingg">0.45 Flow</div>
                                                <div className="dot"><Link to="#"><i className="fas fa-ellipsis-h"></i></Link></div>
                                            </div>
                                            <div className="table-btn">
                                                <Link to="#">Load more</Link>
                                            </div>
                                        </div>
                                    </div></TabPanel>

                                    <TabPanel><div className="inner-content history">
                                        <h4 className="title-dashboard">History</h4>
                                        <div className="history-filter">
                                            <div className="history-content">
                                                <div className="inner tf-filter-container">

                                                    <div className="history-details tf-loadmore 3d anime">
                                                        <div className="authorr">
                                                            <div className="avatar">
                                                                <img src={avt2} alt="images" />
                                                            </div>
                                                            <div className="content">
                                                                <Link to="#" className="name">Baby Girl 3D Model</Link>
                                                                <div className="description">purchased by <Link to="#">Monica Johnson</Link>  for 4.00 ETH  </div>
                                                                <div className="date">
                                                                    <span className="time">16:24</span>
                                                                    <span><i className="fas fa-circle"></i></span>
                                                                    <span className="month">20/05/2022</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="category-filter">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                                <path className="fill-svg" d="M14.167 2.91797H5.83366C3.33366 2.91797 1.66699 4.16797 1.66699 7.08464V12.918C1.66699 15.8346 3.33366 17.0846 5.83366 17.0846H14.167C16.667 17.0846 18.3337 15.8346 18.3337 12.918V7.08464C18.3337 4.16797 16.667 2.91797 14.167 2.91797ZM14.5587 7.99297L11.9503 10.0763C11.4003 10.518 10.7003 10.7346 10.0003 10.7346C9.30033 10.7346 8.59199 10.518 8.05033 10.0763L5.44199 7.99297C5.17533 7.7763 5.13366 7.3763 5.34199 7.10964C5.55866 6.84297 5.95033 6.79297 6.21699 7.00964L8.82533 9.09297C9.45866 9.6013 10.5337 9.6013 11.167 9.09297L13.7753 7.00964C14.042 6.79297 14.442 6.83464 14.6503 7.10964C14.867 7.3763 14.8253 7.7763 14.5587 7.99297Z" fill="white"></path>
                                                            </svg>
                                                            Purchase
                                                        </div>
                                                    </div>
                                                    <div className="history-details tf-loadmore 3d anime">
                                                        <div className="authorr">
                                                            <div className="avatar">
                                                                <img src={avt2} alt="images" />
                                                            </div>
                                                            <div className="content">
                                                                <Link to="#" className="name">Baby Girl 3D Model</Link>
                                                                <div className="description">purchased by <Link to="#">Monica Johnson</Link>  for 4.00 ETH  </div>
                                                                <div className="date">
                                                                    <span className="time">16:24</span>
                                                                    <span><i className="fas fa-circle"></i></span>
                                                                    <span className="month">20/05/2022</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="category-filter">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                                <path className="fill-svg" d="M14.167 2.91797H5.83366C3.33366 2.91797 1.66699 4.16797 1.66699 7.08464V12.918C1.66699 15.8346 3.33366 17.0846 5.83366 17.0846H14.167C16.667 17.0846 18.3337 15.8346 18.3337 12.918V7.08464C18.3337 4.16797 16.667 2.91797 14.167 2.91797ZM14.5587 7.99297L11.9503 10.0763C11.4003 10.518 10.7003 10.7346 10.0003 10.7346C9.30033 10.7346 8.59199 10.518 8.05033 10.0763L5.44199 7.99297C5.17533 7.7763 5.13366 7.3763 5.34199 7.10964C5.55866 6.84297 5.95033 6.79297 6.21699 7.00964L8.82533 9.09297C9.45866 9.6013 10.5337 9.6013 11.167 9.09297L13.7753 7.00964C14.042 6.79297 14.442 6.83464 14.6503 7.10964C14.867 7.3763 14.8253 7.7763 14.5587 7.99297Z" fill="white"></path>
                                                            </svg>
                                                            Purchase
                                                        </div>
                                                    </div>
                                                    <div className="history-details tf-loadmore 3d cyber">
                                                        <div className="authorr">
                                                            <div className="avatar">
                                                                <img src={avt4} alt="images" />
                                                            </div>
                                                            <div className="content">
                                                                <Link to="#" className="name">Cyber Punk Gaming</Link>
                                                                <div className="description"><Link to="#">Monica Johnson</Link> offered for 4.00 ETH </div>
                                                                <div className="date">
                                                                    <span className="time">16:24</span>
                                                                    <span><i className="fas fa-circle"></i></span>
                                                                    <span className="month">20/05/2022</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="category-filter">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                                <path className="fill-svg" d="M14.9257 8.93146H12.3507V2.93146C12.3507 1.53146 11.5924 1.24812 10.6674 2.29812L10.0007 3.05646L4.35908 9.47312C3.58408 10.3481 3.90908 11.0648 5.07574 11.0648H7.65074V17.0648C7.65074 18.4648 8.40907 18.7481 9.33407 17.6981L10.0007 16.9398L15.6424 10.5231C16.4174 9.64812 16.0924 8.93146 14.9257 8.93146Z" fill="white" />
                                                            </svg> Offers
                                                        </div>
                                                    </div>
                                                    <div className="history-details tf-loadmore 3d cyber">
                                                        <div className="authorr">
                                                            <div className="avatar">
                                                                <img src={avt4} alt="images" />
                                                            </div>
                                                            <div className="content">
                                                                <Link to="#" className="name">Cyber Punk Gaming</Link>
                                                                <div className="description"><Link to="#">Monica Johnson</Link> offered for 4.00 ETH </div>
                                                                <div className="date">
                                                                    <span className="time">16:24</span>
                                                                    <span><i className="fas fa-circle"></i></span>
                                                                    <span className="month">20/05/2022</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="category-filter">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                                <path className="fill-svg" d="M14.9257 8.93146H12.3507V2.93146C12.3507 1.53146 11.5924 1.24812 10.6674 2.29812L10.0007 3.05646L4.35908 9.47312C3.58408 10.3481 3.90908 11.0648 5.07574 11.0648H7.65074V17.0648C7.65074 18.4648 8.40907 18.7481 9.33407 17.6981L10.0007 16.9398L15.6424 10.5231C16.4174 9.64812 16.0924 8.93146 14.9257 8.93146Z" fill="white" />
                                                            </svg> Offers
                                                        </div>
                                                    </div>
                                                    <div className="history-details tf-loadmore 3d cyber">
                                                        <div className="authorr">
                                                            <div className="avatar">
                                                                <img src={avt4} alt="images" />
                                                            </div>
                                                            <div className="content">
                                                                <Link to="#" className="name">Cyber Punk Gaming</Link>
                                                                <div className="description"><Link to="#">Monica Johnson</Link> offered for 4.00 ETH </div>
                                                                <div className="date">
                                                                    <span className="time">16:24</span>
                                                                    <span><i className="fas fa-circle"></i></span>
                                                                    <span className="month">20/05/2022</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="category-filter">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                                <path className="fill-svg" d="M14.9257 8.93146H12.3507V2.93146C12.3507 1.53146 11.5924 1.24812 10.6674 2.29812L10.0007 3.05646L4.35908 9.47312C3.58408 10.3481 3.90908 11.0648 5.07574 11.0648H7.65074V17.0648C7.65074 18.4648 8.40907 18.7481 9.33407 17.6981L10.0007 16.9398L15.6424 10.5231C16.4174 9.64812 16.0924 8.93146 14.9257 8.93146Z" fill="white" />
                                                            </svg> Offers
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="table-btn">
                                                    <Link to="#">Load more</Link>
                                                </div>



                                            </div>
                                        </div>
                                    </div></TabPanel>

                                    <TabPanel><div className="inner-content profile">
                                        <h4 className="title-dashboard">Edit Profile</h4>
                                        <form action="#" className="form-edit-profile">
                                            <div className="user-profile">
                                                <div className="title">Contact details</div>
                                                <fieldset>
                                                    <h6>Full Name</h6>
                                                    <input type="text" placeholder="Francisco Maia" required />
                                                </fieldset>
                                                <fieldset>
                                                    <h6>Gender</h6>
                                                    <input type="text" placeholder="Female" required />
                                                </fieldset>
                                                <fieldset>
                                                    <h6>Date of birth</h6>
                                                    <input type="text" placeholder="January 24, 1983" required />
                                                </fieldset>
                                            </div>
                                            <div className="user-profile">
                                                <div className="title">Contact details</div>
                                                <fieldset>
                                                    <h6>Email Address</h6>
                                                    <input type="text" placeholder="Francisco Maia" required />
                                                </fieldset>
                                                <fieldset>
                                                    <h6>Gender</h6>
                                                    <input type="text" placeholder="seb.bennett@gmail.com" required />
                                                </fieldset>
                                                <fieldset>
                                                    <h6>Address</h6>
                                                    <input type="text" placeholder="83222 Dicki View, South Pasqualeview, RI 79216-3100" required />
                                                </fieldset>
                                            </div>
                                            <button className="btn-form" type="submit">
                                                Update Settings
                                            </button>
                                        </form>
                                    </div></TabPanel>
                                </div>
                            </div>
                        </div>
                    </Tabs >

                </div >
            </section >

        </div >
    );
}

export default Dashboard;