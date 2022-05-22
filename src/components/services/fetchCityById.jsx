
export default function fetchCityById(cityId, setCiudad){

    let apiKey = '4ae2636d8dfbdc3044bede63951a019b'

    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}`)
      .then(respuesta => respuesta.json())
      .then(weather =>{
        if(weather.main !== undefined){
        const ciudad = {
            temp: Math.round(weather.main.temp - 273.15),
            name: weather.name,
            id: weather.id,
            img: weather.weather[0].main,
            weather: weather.weather[0].main,
            wind: weather.wind.speed,
            clouds: weather.clouds.all,
            latitud: weather.coord.lat,
            longitud: weather.coord.lon,

         }
         setCiudad(ciudad);

         } else{
          alert('Ciudad no encontrada')
        }
      })
}