import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/app_context';
import { CountryType } from '../../model/country_type';
import styles from './card.module.scss';
type Props = {
  country: CountryType;
};
export const Card = (country: Props) => {
  const {
    countriesContext: { loadCountryInfo },
  } = useContext(AppContext);
  return (
    <li className={styles.li}>
      <Link
        onClick={() => {
          loadCountryInfo(country.country);
        }}
        className={styles.card}
        to={`/country/${country.country.name}`}
      >
        <span className={styles.name}>{country.country.name}</span>
        <img className={styles.flag} src={country.country.flag} />
        <span className={styles.continent}>{country.country.continent}</span>
      </Link>
    </li>
  );
};
