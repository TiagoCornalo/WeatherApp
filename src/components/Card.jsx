import React from 'react';
import './styles/Card.css'
import { Link } from 'react-router-dom'
import './Ciudad'

export default function Card(props) {
  // acá va tu código
  return (<div className='weather-wrapper'>
    <div className='weather-card'>
    <button onClick={props.onClose} className='btn'>X</button>
    <div className={props.img === 'Drizzle' ? 'weather-icon rain' : props.img === 'Clouds' ? 'weather-icon cloud' : props.img === 'Rain' ? 'weather-icon rain' : 'weather-icon sun'}></div>
    <h1>{`${props.temp}°`}</h1>
    <Link to={`/ciudad/${props.id}`} >
      <p>{props.name}</p>
    </Link>
    </div>

  </div>)
};