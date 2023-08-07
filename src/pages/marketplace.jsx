import React, { useEffect, useState } from 'react'
import './marketplace.css'
const Buyform = React.lazy(() => import('../components/Market/buyform'))
import ReactPaginate from "https://cdn.skypack.dev/react-paginate@7.1.3";
import DisplayNFT from '../components/Market/displayNFT'

const datas = [
    { id: 1, name: 'Sa Mac', address: 'null', price: 0.05, url: '' },
    { id: 2, name: 'Hoang Sa', address: 'null', price: 0.05, url: '' },
    { id: 3, name: 'Truong sa', address: '0x657888B7eCBEF11bb4c446C6a1d61FF979468c70', price: 0.05, url: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Spratly_Island.png ' },
    { id: 4, name: 'Truong sa', address: '0x657888B7eCBEF11bb4c446C6a1d61FF979468c70', price: 0.05, url: '' },
    { id: 5, name: 'Truong sa', address: '0x657888B7eCBEF11bb4c446C6a1d61FF979468c70', price: 0.05, url: '' },
    { id: 6, name: 'Truong sa', address: '0x657888B7eCBEF11bb4c446C6a1d61FF979468c70', price: 0.05, url: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Spratly_Island.png ' },
    { id: 7, name: 'Truong sa', address: '0x657888B7eCBEF11bb4c446C6a1d61FF979468c70', price: 0.05, url: '' },
    { id: 8, name: 'Truong sa', address: '0x657888B7eCBEF11bb4c446C6a1d61FF979468c70', price: 0.05, url: '' },
    { id: 9, name: 'Truong sa', address: '0x657888B7eCBEF11bb4c446C6a1d61FF979468c70', price: 0.05, url: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Spratly_Island.png ' },
    { id: 10, name: 'Truong sa', address: '0x657888B7eCBEF11bb4c446C6a1d61FF979468c70', price: 0.05, url: '' },
    { id: 11, name: 'Sa Mac', address: 'null', price: 0.05, url: '' },
    { id: 12, name: 'Hoang Sa', address: 'null', price: 0.05, url: '' },
    { id: 13, name: 'Truong sa', address: '0x657888B7eCBEF11bb4c446C6a1d61FF979468c70', price: 0.05, url: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Spratly_Island.png ' },
]

function Items({ currentItems, handleOpenform, isOpen }) {
    return (
        <div>
            <h1 className='headermarket'>Market Place</h1>
            <div className='marketplace'>
                {currentItems && currentItems.map((data) => {
                    return <DisplayNFT isOpen={isOpen} handleOpenform={handleOpenform} key={data.id} {...data} />
                })}
            </div>
        </div>
    );
}

function PaginatedItems({ itemsPerPage }) {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [isOpen, setisOpen] = useState(false)
    const [acceptBuy, setacceptBuy] = useState({ address: '' })

    console.log(acceptBuy.address)
    const handleOpenform = () => {
        setisOpen((cstate) => !cstate)
    }

    const handleacceptBuy = () => {
        if (acceptBuy.address) {
            setisOpen((cstate) => !cstate)
        }
        else {
            console.log("Kết nối ví đi đã")
        }
    }

    useEffect(() => {
        setCurrentItems(datas.slice(itemOffset, itemOffset + itemsPerPage));
        setPageCount(Math.ceil(datas.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
        setItemOffset(event.selected * itemsPerPage % datas.length);
    };

    return (
        <>
            <Items isOpen={isOpen} currentItems={currentItems} handleOpenform={handleOpenform} />
            <ReactPaginate
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="<"
                breakLabel="..."
                containerClassName="pagination"
                activeClassName="activepage"
                renderOnZeroPageCount={null}
            />
            {isOpen && <Buyform handleacceptBuy={handleacceptBuy} handleOpenform={handleOpenform} />}
        </>
    );
}

const home = () => {
    return (
        <>
            <div className='bg1'></div>
            <div className='bg2'></div>
            <PaginatedItems itemsPerPage={5} />
        </>
    )
}
export default home