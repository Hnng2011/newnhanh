import React from 'react'
import './leaderboard.css'

const users = ['0x657888B7eCBEF11bb4c446C6a1d61FF979468c70', '0x657888B7eCBEF11bb4c446C6a1d61FF979468c70']

const leaderboard = () => {
    return (
        <div className="lead">
            <ul className="lead_list">
                <li>1<span>{users[0]}</span></li>
                <li>2 <span>{users[1]}</span> </li>
                <li>3 <span>{users[2]}</span> </li>
                <li>4 <span>{users[3]}</span> </li>
                <li>5 <span>{users[4]}</span> </li>
                <li>6 <span>{users[5]}</span> </li>
                <li>7 <span>{users[6]}</span> </li>
                <li>8 <span>{users[7]}</span> </li>
                <li>9 <span>{users[8]}</span> </li>
                <li>10 <span>{users[9]}</span> </li>

                <img className='crown' src='../../public/2025491-ffeb3b.svg' />
            </ul>

            <ul className="lead_list">
                <li>11<span>{users[10]}</span></li>
                <li>12<span>{users[11]}</span></li>
                <li>13<span>{users[12]}</span></li>
                <li>14<span>{users[13]}</span></li>
                <li>15<span>{users[14]}</span></li>
                <li>16<span>{users[15]}</span></li>
                <li>17<span>{users[16]}</span></li>
                <li>18<span>{users[17]}</span></li>
                <li>19<span>{users[18]}</span></li>
                <li>20<span>{users[19]}</span></li>
                <img className="crown" src='../../public/2025491-ffeb3b.svg' />
            </ul>
        </div>
    )
}

export default leaderboard