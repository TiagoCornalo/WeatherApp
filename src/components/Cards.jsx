import React from 'react';
import Card from './Card'
import './styles/Card.css'

export default function Cards({cities, onClose}) {
  // acá va tu código
  // tip, podés usar un map
  if(!cities){
    return <h3>No hay ciudades disponibles</h3>
  }
  return <div className='weather-wrapper'>{
      cities.map(city =>(
        <Card
        key={city.id}
        temp = {city.temp}
        name = {city.name}
        id = {city.id}
        img = {city.img}
        onClose = {() => onClose(city.id)}
      />
      ))
    }</div>
};