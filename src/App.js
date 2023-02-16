import { useEffect, useState } from 'react';
import WeatherTable from './components/WeatherTable';
import axios from 'axios';
import { getWeatherData } from "./redux/weather/weatherSlice"
import { useDispatch } from "react-redux"
import ModalDetail from './components/ModalDetail';
import './App.css';

function App() {
    const dispatch = useDispatch()
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [detailId, setDetailId] = useState("");

    const handleShowModal = (id) => {
        setDetailId(id)
        setIsModalVisible(true);
    }

    const handleCloseModal = () => {
        setIsModalVisible(false);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://api.datos.gob.mx/v1/condiciones-atmosfericas")
                if (response.data) {
                    dispatch(getWeatherData(response.data.results))
                }
            } catch (error) {
                console.log("error al obtener los datos", error)
            }
        }

        fetchData()
    }, [dispatch]);

    return (
        <div className="App">
            <ModalDetail isVisible={isModalVisible} onClose={handleCloseModal} id={detailId} />
            <WeatherTable onShow={handleShowModal} />
        </div>
    );
}

export default App;
