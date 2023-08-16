import { useNavigate } from 'react-router-dom';
import { CountryType } from '../../model/country_type';
import styles from './card.module.scss';
type Props = {
  country: CountryType;
};
export const Card = (country: Props) => {
  const navigate = useNavigate();
  return (
    <li
      onClick={() => navigate(`/countries/${country.country.name}`)}
      className={styles.card}
    >
      {/* <Link className={styles.link} to={`/home/:${country.country.name}`}> */}
      <span className={styles.name}>{country.country.name}</span>
      <img className={styles.flag} src={country.country.flag} />
      <span className={styles.continent}>{country.country.continent}</span>
      {/* </Link> */}
    </li>
  );
};
