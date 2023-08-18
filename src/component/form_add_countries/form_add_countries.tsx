import { useState } from 'react';
import { Form } from 'react-router-dom';
import { Countries } from '../countries/countries';


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
   <form action="/my-invented-form-page" method="post">
<ul>
    <li>
      <label for="country">Country of fantasy:</label>
      <input type="text" name="user_country"  onChange={(event) => useState({name: event.target.value})}></input>
    </li>
    <li>
      <label for="flag-image">Flag Image:</label>
      <input type="img.png"  name="user_flag-image" onChange={(event) => useState({name: event.target.value})}></input>
    </li>
    <li>
      <label for="language">Language or signal language:</label>
      <input type="language_signal" onChange={(event) => useState({name: event.target.value})}></input>
    </li>
      <li>
      <label for="currencies">Currencies or barter:</label>
      <input id="text" onChange={(event) => useState({name: event.target.value})}></input>
    </li>
      <li>
      <label for="favorite creature">Favorite creature:</label>
      <input id="number" onChange={(event) => useState({name: event.target.value})}></input>
    </li>
      <li>
      <label for="position in the universe">Position in the universe:</label>
      <input id="text" onChange={(event) => useState({name: event.target.value})}></input>
    </li>
      <li>
      <label for="capital">Capital:</label>
      <input id="text"onChange={(event) => useState({name: event.target.value})}></input>
    </li>
       <li>
      <label for="demonym">Demonym:</label>
      <input id="demonym" onChange={(event) => useState({name: event.target.value})}></input>
    </li>
      <li>
      <label for="population"> Population:</label>
      <input id="population" onChange={(event) => useState({name: event.target.value})}></input>
    </li>
    <li>
      <label for="map-url">Map URL:</label>
      <input id="url" onChange={(event) => useState({name: event.target.value})}></input>
    </li>
  </ul>
  
  <p><button type="submit">Add Country</button></p>
</form>
</div> 
)
}


