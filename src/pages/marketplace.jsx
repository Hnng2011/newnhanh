import React, { useEffect, useState } from 'react'
import ReactPaginate from "https://cdn.skypack.dev/react-paginate@7.1.3";
import './marketplace.css'
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
    { id: 14, name: 'Truong sa', address: '0x657888B7eCBEF11bb4c446C6a1d61FF979468c70', price: 0.05, url: '' },
    { id: 15, name: 'Tvsdasd', address: '0x657888B7eCBEF11bb4c446C6a1d61FF979468c70', price: 0.05, url: '' },
    { id: 16, name: 'Tddd', address: '0x657888B7eCBEF11bb4c446C6a1d61FF979468c70', price: 0.05, url: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Spratly_Island.png ' },
    { id: 17, name: 'huhuhu', address: '0x657888B7eCBEF11bb4c446C6a1d61FF979468c70', price: 0.05, url: '' },
    { id: 18, name: 'Truong sa', address: '0x657888B7eCBEF11bb4c446C6a1d61FF979468c70', price: 0.05, url: '' },
    { id: 19, name: 'Truong sa', address: '0x657888B7eCBEF11bb4c446C6a1d61FF979468c70', price: 0.05, url: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Spratly_Island.png ' },
    { id: 20, name: 'Truong sa', address: '0x657888B7eCBEF11bb4c446C6a1d61FF979468c70', price: 0.05, url: '' },

]

function Items({ currentItems }) {
    useEffect(() => {
        const listItems = document.querySelectorAll('.NFT');

        listItems.forEach((item, index) => {
            item.style.animationDuration = `${index * 0.1 + 1}s`;
        });

    }, [currentItems]);

    return (
        <div>
            <div className='background'><div className='gradient'></div></div>
            <h1 className='headermarket'>Market Place</h1>
            <div className='marketplace'>
                {currentItems && currentItems.map((data) => {
                    return <DisplayNFT key={data.id} {...data} />
                })}
            </div>
        </div>
    );
}

function PaginatedItems({ itemsPerPage }) {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(datas.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(datas.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage % datas.length;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} />
            <ReactPaginate
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="<"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="activepage"
                renderOnZeroPageCount={null}
            />
        </>
    );
}

const home = () => {
    return (
        <>
            <PaginatedItems itemsPerPage={5} />
        </>

    )
}

export default home