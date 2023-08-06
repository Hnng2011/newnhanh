import React, { useEffect } from 'react'
import './history.css'
import Chart from 'chart.js/auto'




const history = () => {
    useEffect(() => {
        (async function () {
            const data = [
                { year: 2010, count: 10 },
                { year: 2011, count: 20 },
                { year: 2012, count: 15 },
                { year: 2013, count: 25 },
                { year: 2014, count: 22 },
                { year: 2015, count: 30 },
                { year: 2016, count: 77 },
            ];

            new Chart(
                document.getElementById('acquisitions'),
                {
                    type: 'bar',
                    options: {
                        plugins: {
                            legend: {
                                display: false
                            },
                            title: {
                                align: 'center',
                                display: true,
                                font: {
                                    size: 17,
                                },
                                color: 'white',
                                text: 'Lịch sử Giao Dịch',
                            }
                        }
                    },
                    data: {
                        labels: data.map(row => row.year),
                        datasets: [
                            {
                                label: 'Acquisitions by year',
                                data: data.map(row => row.count)
                            }
                        ]
                    }
                }
            );
        })();
    }, [])


    return (
        <>
            <div>
                <div className='chart'><canvas id="acquisitions"></canvas></div>
            </div>
        </>
    )
}

export default history