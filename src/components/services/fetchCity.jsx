

export default function fetchCity(city, setCities){

    let apiKey = '4ae2636d8dfbdc3044bede63951a019b'

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(respuesta => respuesta.json())
      .then(weather =>{
        if(weather.main !== undefined){
        const new_city = {
            temp: Math.round(weather.main.temp),
            name: weather.name,
            id: weather.id,
            img: weather.weather[0].main,
            weather: weather.weather[0].main,
            wind: weather.wind.speed,
            clouds: weather.clouds.all,
            latitud: weather.coord.lat,
            longitud: weather.coord.lon,

         }
         setCities(oldCities =>{
          if(oldCities.some(city => city.name === new_city.name)){
            return oldCities
          } else {
            return [...oldCities, new_city]
          }
        });
         } else{
          alert('Ciudad no encontrada')
        }
      })
}