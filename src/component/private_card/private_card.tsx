import { Link } from 'react-router-dom';
import { CountryType } from '../../model/country_type';
import styles from './private_card.module.scss';
type Props = {
  country: CountryType;
};
export const PrivateCard = (country: Props) => {
  return (
    <li className={styles.card}>
      <span className={styles.name}>{country.country.name}</span>
      <Link className={styles.link} to={`/country/${country.country.name}`}>
        <img className={styles.flag} src={country.country.flag} />
      </Link>
      <div className={styles.container}>
        <span className={styles.delete}>🗑️</span>
        <span className={styles.continent}>{country.country.continent}</span>
        <span className={styles.edit}>✏️</span>
      </div>
    </li>
  );
};
