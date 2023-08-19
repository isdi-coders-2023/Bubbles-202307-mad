import { SyntheticEvent, useState } from 'react';

type Country = {
  name: string;
  flagImage: string;
  language_signal: string;
  currencies: string;
  favorite_creature: string;
  position_in_the_universe: string;
  capital: string;
  demonym: string;
  population: number;
  mapUrl: string;
};

export function FormCountry() {
  const initialState: Country = {
    name: '',
    flagImage: '',
    language_signal: '',
    currencies: '',
    favorite_creature: '',
    position_in_the_universe: '',
    capital: '',
    demonym: '',
    population: 369,
    mapUrl: '',
  };

  const [userData, setUserData] = useState<Country>(initialState);

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    console.log('name', userData.capital);
  };

  const handleChange = (ev: SyntheticEvent) => {
    const formControl = ev.target as HTMLFormElement;
    console.dir(formControl);
    setUserData({
      ...userData,
      [formControl.name]:
        formControl.type === 'checkbox'
          ? formControl.checked
          : formControl.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <legend>Can you imagine a new country</legend>
      <p>Add your country</p>

      <div className="group-control">
        <input
          type="text"
          name="name"
          placeholder="Name of country"
          required
          value={userData.name}
          onChange={handleChange}
        />
      </div>

      <div className="group-control">
        <input
          type="text"
          name="language_signal"
          placeholder="language or signal?"
          required
          value={userData.language_signal}
          onChange={handleChange}
        />
      </div>

      <div className="group-control">
        <input
          type="text"
          name="currencies"
          placeholder="Use money?"
          required
          value={userData.currencies}
          onChange={handleChange}
        />
      </div>

      <div className="group-control">
        <input
          type="text"
          name=" favorite_creature"
          placeholder="What it´s your favorite creature?"
          required
          value={userData.favorite_creature}
          onChange={handleChange}
        />
      </div>

      <div className="group-control">
        <input
          type="text"
          name=" position_in_the_universe"
          placeholder="Position on the Universe"
          required
          value={userData.position_in_the_universe}
          onChange={handleChange}
        />
      </div>

      <div className="group-control">
        <input
          type="text"
          name=" capital"
          placeholder=" capital?"
          required
          value={userData.capital}
          onChange={handleChange}
        />
      </div>

      <div className="group-control">
        <input
          type="text"
          name="demonym"
          placeholder="Demonym?"
          required
          value={userData.demonym}
          onChange={handleChange}
        />
      </div>

      <div className="group-control">
        <input
          type="number"
          name="population"
          placeholder="population?"
          required
          value={userData.population}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}
