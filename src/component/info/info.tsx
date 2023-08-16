import { useCountries } from '../../hooks/use_countries';
import { mockArrCountries } from '../../service/countries_data';
import style from './info.module.scss';

const mockCountry = mockArrCountries[0];

export function Info() {
  const { countryInfo } = useCountries();
  return (
    <section className={style.section}>
      <button className={style.button}>Back to home</button>
      <div>
        <span className={style.span}>{countryInfo.name}</span>
        <img className={style.img} src={countryInfo.flag} alt="flag" />
      </div>
      <div>
        <img
          className={style.imgArmy}
          src={countryInfo.coatOfArmy}
          alt="flag of Army"
        />
      </div>
      <ol className={style.text}>
        <li>Capital: {countryInfo.capital}</li>
        <li>Language: {countryInfo.language}</li>
        <li>Demonym: {countryInfo.demonym}</li>
        <li>Currencies: {countryInfo.currencies}</li>
        <li>Population: {countryInfo.population}</li>
        <li>Timezone: {countryInfo.timezone}</li>
      </ol>
      <div className={style.maps}>map: {countryInfo.maps}</div>
    </section>
  );
}
