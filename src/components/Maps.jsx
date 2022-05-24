import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import './styles/Card.css'


const BaseMap = (props) => {
  // mapboxgl.accessToken = 'pk.eyJ1IjoiYmFrZXIxNiIsImEiOiJjbDNmdTR3YjEwcnVsM2pwNndmMXJzY2hmIn0.FaPrFwjyR0DFWohS-ntc2g'

  // useEffect(() => {
  //   new mapboxgl.Map({
  //     container: "mapContainer",
  //     style: "mapbox://styles/mapbox/streets-v11",
  //     center: [props.lng, props.lat],
  //     zoom: 12,
  //   });
  // });

  return (<div id="mapContainer" className="mapDiv">
    <iframe 
     width='1000'
     height= '400'
    scrolling= 'yes'
    marginHeight= '0'
    marginWidth = '0'
    src={`https://maps.google.com/maps?q= + ${props.lat} +, +${props.lng} +  &t=&z=13&ie=UTF8&iwloc=&output=embed`}>

    </iframe>
  </div>);
};

export default BaseMap;
