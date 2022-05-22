import React, {useState} from 'react';
import Cards from './components/Cards.jsx';
import Navigation from './components/Navbar.jsx';
import './components/Navbar.jsx';
import Ciudad from './components/Ciudad'
import { Route } from 'react-router-dom'
import fetchCity from './components/services/fetchCity.jsx';


function App() {
  const [cities, setCities] = useState([])

  function onSearch(city){
    fetchCity(city, setCities)
  }

  function onClose(id){
    setCities(oldCities => oldCities.filter(c => c.id !== id))
  }

  function onFilter(cityId){
    const ciudad = cities.filter(city => city.id === parseInt(cityId))
    return ciudad
  }
  return (
    <div>
      <div>
        <Navigation
          onSearch={onSearch} 
        />
      </div>
      <div>
        <Route path='/' exact>
        <Cards
          cities={cities} onClose={onClose}
        />
        </Route>
        <Route  exact path='/ciudad/:id' render={({match}) => <Ciudad  city={onFilter(match.params.id)}/>} />
      </div>
    </div>
  );
}

export default App;