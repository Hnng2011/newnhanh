import React from 'react';
import PageTitle from '../components/pagetitle/PageTitle';
import HotPick from '../components/hotpick/HotPick';
import dataHotpick from '../assets/fake-data/data-hotpick';

function Explore02(props) {
    return (
        <div className='page-explore'>
            <PageTitle title='Marketplace' />

            <HotPick data={dataHotpick} />

        </div>
    );
}

export default Explore02;