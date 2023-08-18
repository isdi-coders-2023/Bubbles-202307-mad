import { useState } from 'react';
import { Countries } from '../countries/countries';
import { Form } from '../form_/form';

export type NewCountry = {
  Imaginarycountry: string;
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
  [Form]: Countries,
}

return (
   <div>
    <h1>Invented new country</h1>
   <form action="/my-invented-form-page" 
   method="post">
<ul>
    <li>
      <label for="country">Country:</label>
      <input type="text" id="country" name="user_country"  onChange={(event) => this.useState({name: event.target.value})} />
    </li>
    <li>
      <label for="flag-image">Flag Image:</label>
      <input type="img.png" id="flag" name="user_flag-image" handleSubmit=""/>
    </li>
    <li>
      <label for="language">Language or signal language:</label>
      <input id="text" country="user_language" handleSubmit= ""></input>
    </li>
      <li>
      <label for="currencies">Currencies or barter:</label>
      <input id="text" country="user_currencies" handleSubmit=""></input>
    </li>
      <li>
      <label for="timeZone">Time Zone:</label>
      <input id="number" country="user_timeZone" handleSubmit=""></input>
    </li>
      <li>
      <label for="continent">Continent:</label>
      <input id="text" country="user_continent" handleSubmit=""></input>
    </li>
      <li>
      <label for="capital">Capital:</label>
      <input id="text" country="user_capital" handleSubmit=""></input>
    </li>
       <li>
      <label for="demonym">Demonym:</label>
      <input id="demonym" country="user_demonym" handleSubmit=""></input>
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
</div> 
)
}


