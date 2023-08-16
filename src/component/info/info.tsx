import { mockArrCountries } from '../../service/countries_data';
import style from './info.module.scss';

export function Info() {
  const mockCountry = mockArrCountries[0];
  return (
    <section className={style.section}>
      <button className={style.button}>Back to home</button>
      <div>
        <span className={style.span}>{mockCountry.name}</span>
        <img className={style.img} src={mockCountry.flag} alt="flag" />
      </div>
      <div>
        <img
          className={style.imgArmy}
          src={mockCountry.coatOfArmy}
          alt="flag of Army"
        />
      </div>
      <ol className={style.text}>
        <li>Capital: {mockCountry.capital}</li>
        <li>Language: {mockCountry.language}</li>
        <li>Demonym: {mockCountry.demonym}</li>
        <li>Currencies: {mockCountry.currencies}</li>
        <li>Population: {mockCountry.population}</li>
        <li>Timezone: {mockCountry.timezone}</li>
      </ol>
      <div className={style.maps}>map: {mockCountry.maps}</div>
    </section>
  );
}
