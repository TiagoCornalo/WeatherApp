import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import fetchCityById from "./services/fetchCityById";
import './styles/Card.css'
import BaseMap from './Maps'


export default function Ciudad() {
    const [city, setCiudad] = useState()
    const {id} = useParams()  

    useEffect(() =>{
        fetchCityById(id, setCiudad) 
    }
    ,[id])

    return (
        <div className="ciudad">
                {city && (<div>
                    <div className="maps">
                        <h2>{city.name}</h2>
                         <p>Temperatura: {city.temp} ºC</p>
                        <p>Clima: {city.weather}</p>
                        <p>Viento: {city.wind} km/h</p>
                        <p>Cantidad de nubes: {city.clouds}</p>
                        <p>Latitud: {city.latitud}º</p>
                        <p>Longitud: {city.longitud}º</p>
                    </div>
                    <div className="mapDiv">
                            <BaseMap lat={city.latitud} lng={city.longitud}/>
                        </div>
            </div> )}
        </div>
    )
}