import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { menuOptions } from '../../config';
import { AppContext } from '../../context/app_context';
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
      <h2 className={style.h2}>{countryInfo.name}</h2>
      <div>
        {countryInfo.coatOfArm && (
          <img
            className={style.imgArmy}
            src={countryInfo.coatOfArm}
            alt="flag of Army"
          />
        )}
      </div>

      <ol className={style.text}>
        <li className={style.li}>Capital: {countryInfo.capital}</li>
        <li className={style.li}>Language: {countryInfo.language}</li>
        <li className={style.li}>Demonym: {countryInfo.demonym}</li>
        <li className={style.li}>Currencies: {countryInfo.currencies}</li>
        <li className={style.li}>Population: {countryInfo.population}</li>
        <li className={style.li}>Timezone: {countryInfo.timezone}</li>
      </ol>
      <div className={style.maps}>
        {`Mapa:    `}
        <a className={style.maps} target="_blank" href={countryInfo.maps}>
          {countryInfo.maps}
        </a>
      </div>
    </section>
  );
}
