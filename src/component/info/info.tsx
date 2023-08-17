import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../conext/app.context';
import { menuOptions } from '../../config';
import style from './info.module.scss';

export function Info() {
  const {
    countriesContext: { countryInfo },
  } = useContext(AppContext);

  return (
    <section className={style.section}>
      <Link to={menuOptions[0].path}>
        <button className={style.button}>Back to home</button>
      </Link>
      <div>
        <span className={style.span}>{countryInfo.name}</span>
        <img className={style.img} src={countryInfo.flag} alt="flag" />
      </div>
      <div>
        <img
          className={style.imgArmy}
          src={countryInfo.coatOfArm}
          alt="flag of Army"
        />
      </div>
      <ol className={style.text}>
        <li>Capital: {countryInfo.capital}</li>
        <li>Language: {countryInfo.language}</li>
        <li>Demonym: {countryInfo.demonym}</li>
        {/* <li>Currencies: {countryInfo.currencies}</li> */}
        <li>Population: {countryInfo.population}</li>
        <li>Timezone: {countryInfo.timezone}</li>
      </ol>
      <div className={style.maps}>
        map: <a href={countryInfo.maps}>{countryInfo.maps}</a>
      </div>
    </section>
  );
}
