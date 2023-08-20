import { SyntheticEvent, useState } from 'react';
import styles from './form.module.scss';

type Country = {
  name: string;
  flagImage: string;
  language_signal: string;
  currencies: string;
  favorite_creature: string;
  position_in_the_universe: string;
  capital: string;
  demonym: string;
  population: string;
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
    population: '',
    mapUrl: '',
  };

  const [userData, setUserData] = useState<Country>(initialState);

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
  };

  const handleChange = (ev: SyntheticEvent) => {
    const formControl = ev.target as HTMLFormElement;
    console.dir(formControl);
    setUserData({
      ...userData,
      [formControl.name]: formControl.value,
    });
  };

  return (
    <form role="form" onSubmit={handleSubmit}>
      <div className={styles.header}>
        <legend className={styles.legend}>
          Can you imagine a new country?
        </legend>
        <p className={styles.p}>Please, let me know your invented country;</p>
      </div>
      <section className={styles.section}>
        <div className={styles.div}>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Name of country"
            required
            value={userData.name}
            onChange={handleChange}
          />
        </div>

        <div className={styles.div}>
          <input
            className={styles.input}
            type="text"
            name="language_signal"
            placeholder="Language or signal"
            required
            value={userData.language_signal}
            onChange={handleChange}
          />
        </div>

        <div className={styles.div}>
          <input
            className={styles.input}
            type="text"
            name="currencies"
            placeholder="currencies"
            required
            value={userData.currencies}
            onChange={handleChange}
          />
        </div>

        <div className={styles.div}>
          <input
            className={styles.input}
            type="text"
            name="favorite_creature"
            placeholder="Favorite creature?"
            required
            value={userData.favorite_creature}
            onChange={handleChange}
          />
        </div>

        <div className={styles.div}>
          <input
            className={styles.input}
            type="text"
            name="position_in_the_universe"
            placeholder="Position on the Universe"
            required
            value={userData.position_in_the_universe}
            onChange={handleChange}
          />
        </div>
        <div className={styles.div}>
          <input
            className={styles.input}
            type="text"
            name="capital"
            placeholder="Capital"
            required
            value={userData.capital}
            onChange={handleChange}
          />
        </div>

        <div className={styles.div}>
          <input
            className={styles.input}
            type="text"
            name="demonym"
            placeholder="Demonym"
            required
            value={userData.demonym}
            onChange={handleChange}
          />
        </div>

        <div className={styles.div}>
          <input
            className={styles.input}
            type="text"
            name="population"
            placeholder="Population"
            required
            value={userData.population}
            onChange={handleChange}
          />
        </div>
      </section>
      <button role="button" onClick={handleSubmit}>
        button1
      </button>
      <button role="button" onClick={handleChange}></button>
      <button type="submit" className={styles.button} font-color="black">
        Send the new country
      </button>
    </form>
  );
}
