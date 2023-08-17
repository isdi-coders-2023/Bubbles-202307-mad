import { useState } from 'react';
import { Countries } from '../countries/countries';

export type NewCountry = {
  country: string;
  flagImage: string;
  language: string;
  currencies: string;
  timeZone: string;
  continent: string;
  capital: string;
  demonym: string;
  population: number;
  mapUrl: string;
};

export Form() {


  const [country, setCountry] = useState({} as NewCountry);
  const [countryList, setCountryList] = useState([] as NewCountry[]);
  setCountry({} as NewCountry);
  console.log(country);
// valida el formulario
function handleSubmit(event:Event): void { 
 
  event.preventDefault();
}

function handleChange(): void {
  const card = {} as NewCountry
  setCountry(card); 
  
}

const newCountries = {
  ...Countries,
  [add_country]: Countries,
}

return (
 <form action="/my-handling-form-page" method="post">

  <ul>
    <li>
      <label for="country">Country:</label>
      <input type="text" id="country" name="user_country" />
    </li>
    <li>
      <label for="flag-image">Flag Image:</label>
      <input type="img.png" id="flag" name="user_flag-image" />
    </li>
    <li>
      <label for="language">Language:</label>
      <input id="text" country="user_language"></input>
    </li>
      <li>
      <label for="currencies">Currencies:</label>
      <input id="text" country="user_currencies"></input>
    </li>
      <li>
      <label for="timeZone">Time Zone:</label>
      <input id="number" country="user_timeZone"></input>
    </li>
      <li>
      <label for="continent">Continent:</label>
      <input id="text" country="user_continent"></input>
    </li>
      <li>
      <label for="capital">Capital:</label>
      <input id="text" country="user_capital"></input>
    </li>
       <li>
      <label for="demonym">Demonym:</label>
      <input id="demonym" country="user_demonym"></input>
    </li>
      <li>
      <label for="population"> Population:</label>
      <input id="population" country="user_ population"></input>
    </li>
    <li>
      <label for="map-url">Map URL:</label>
      <input id="url" country="user_mapUrl"></input>
    </li>
  </ul>
  <p><button type="submit">Add Country</button></p>
</form>


)
}
