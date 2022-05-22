import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import './styles/Card.css'

const BaseMap = (props) => {
  mapboxgl.accessToken = 'pk.eyJ1IjoiYmFrZXIxNiIsImEiOiJjbDNmdTR3YjEwcnVsM2pwNndmMXJzY2hmIn0.FaPrFwjyR0DFWohS-ntc2g'


  useEffect(() => {
    new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [props.lng, props.lat],
      zoom: 12,
    });
  });

  return <div id="mapContainer" className="mapDiv"></div>;
};

export default BaseMap;