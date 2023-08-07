import './pool.css'

const pool = ({ name, url, total, apr, end }) => {
    return (
        <div className='poolin'>
            <div className='poolinfo'>
                <img src={url} alt={name} />
                <h2>{name}</h2>
            </div>
            <div className='pooldetail'>
                <h2>Total Stake:</h2>
                <p>{total}</p>
            </div>
            <div className='pooldetail'>
                <h2>APR:</h2>
                <p>{apr}</p>
            </div>
            <div className='pooldetail'>
                <h2>Ends in:</h2>
                <p>{end} days</p>
            </div>

            <div>
                <button className='stake'>Stake</button>
            </div>
            <div>
                <button className='harvest'>Harvest</button>
            </div>


        </div>
    )
}

export default pool