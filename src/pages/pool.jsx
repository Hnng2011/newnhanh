import './pool.css'
import Pool from '../components/pool/pool'

const datas = [
    {
        name: 'Số 1 ',
        url: null,
        total: '17',
        apr: 7.7,
        end: 27,
    },

    {
        name: 'Số 2',
        url: null,
        total: '17',
        apr: 7.7,
        end: 27,
    },
    {
        name: 'Số 3',
        url: null,
        total: '17',
        apr: 7.7,
        end: 27,
    }
]

const pool = () => {
    return (
        <>
            <div className='pool'>
                <h1>Pool
                    <p>
                        Stake your NFT to earn , low risk , high APR
                    </p>
                </h1>
                {datas.map((data) => { return <Pool key={data.name} {...data} /> })}
            </div>
        </>
    )
}

export default pool