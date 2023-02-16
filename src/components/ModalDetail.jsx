import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import "../styles/modalDetail.css"

const ModalDetail = ({ isVisible, onClose, id }) => {
    const data = useSelector(state => state.weather.data)
    const [detail, setDetail] = useState(null);

    useEffect(() => {
        if (data) {
            const result = data.filter(item => item._id === id)
            if (result) {
                setDetail(result[0])
            }
        }
    }, [data, id]);

    return (
        <div className="modal-detail" style={isVisible ? { display: "block" } : { display: "none" }}>
            <span onClick={onClose}>X</span>
            {detail &&
                <>
                    <h1>{detail.name} Weather</h1>
                    <p>State: {detail.state}</p>
                    <p>Temperature: {detail.tempc}°</p>
                    <p>Wind KM: {detail.windspeedkm}</p>
                    <p>Humidity: {detail.relativehumidity}</p>
                    <p>
                        Probability of Rain: {detail.probabilityofprecip}
                    </p>
                    <p>
                        Latitude: {detail.latitude}
                    </p>
                    <p>
                        Longitude: {detail.longitude}
                    </p>
                    <p>
                        Description: {detail.skydescriptionlong}
                    </p>
                </>
            }
        </div>
    )
}

export default ModalDetail