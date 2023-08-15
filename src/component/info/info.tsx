import { CountryType } from '../../model/country_type';
import style from './info.module.scss';

type Props = {
  country: CountryType;
};
export function Info(country: Props) {
  return (
    <section className={style.section}>
      <button className={style.button}>Back to home</button>
      <div>
        <span className={style.span}>{country.country.name}</span>
        <img className={style.img} src={country.country.flag} alt="flag" />
      </div>
      <div>
        <img
          className={style.imgArmy}
          src={country.country.coatOfArmy}
          alt="flag of Army"
        />
      </div>
      <ol className={style.text}>
        <li>Capital: {country.country.capital}</li>
        <li>Language: {country.country.language}</li>
        <li>Demonym: {country.country.demonym}</li>
        <li>Currencies: {country.country.currencies}</li>
        <li>Population: {country.country.population}</li>
        <li>Timezone: {country.country.timezone}</li>
      </ol>
      <div className={style.maps}>map: {country.country.maps}</div>
    </section>
  );
}
