import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import "../styles/weatherTable.css"
import { formatDateYYYMMDD } from '../utils/dateFormating'
import Pagination from './Pagination'

const WeatherTable = ({ onShow }) => {
    const data = useSelector(state => state.weather.data)
    const [currentPage, setCurrentPage] = useState(1);
    const [limit] = useState(10);
    const [totalPages, setTotalPages] = useState(0);

    const handleChangePage = (page) => {
        setCurrentPage(page)
    }

    useEffect(() => {
        setTotalPages(data.length / limit)
    }, [data, limit]);

    return (
        <>
            <div className='weather-table'>
                <p className='header-table'>_id</p>
                <p className='header-table'>cityid</p>
                <p className='header-table'>name </p>
                <p className='header-table'>state</p>
                <p className='header-table'>probabilityof
                    precip</p>
                <p className='header-table'>relativehu
                    midity</p>
                <p className='header-table'>Last report Time</p>
                <p className='header-table'>Is Rainny Day</p>


                {data &&
                    data.slice((currentPage - 1) * limit, (currentPage - 1) * limit + limit).map(item => {
                        return (
                            <>
                                <p className='detail-id' onClick={() => onShow(item._id)}>{item._id}</p>
                                <p>{item.cityid}</p>
                                <p>{item.name}</p>
                                <p>{item.state}</p>
                                <p>{item.probabilityofprecip}</p>
                                <p>{item.relativehumidity}</p>
                                <p>{formatDateYYYMMDD(item.lastreporttime)}</p>
                                <p>{
                                    item.probabilityofprecip > 60 ||
                                        item.relativehumidity > 50
                                        ? "YES" : "NO"
                                }</p>
                            </>
                        )
                    })
                }
            </div>
            <Pagination current={currentPage} total={totalPages} onChangePage={handleChangePage} />
            <div className='total-registers'>
                <span>Total Registros: {data ? data.length : 0}</span>
            </div>
        </>
    )
}

export default WeatherTable