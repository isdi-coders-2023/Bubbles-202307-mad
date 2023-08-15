import { CountryType } from '../../model/country_type';
import styles from './card.module.scss';
type Props = {
  country: CountryType;
};
export const Card = (country: Props) => {
  return (
    <li className={styles.card}>
      <span className="name">{country.country.name}</span>
      <img className={styles.flag} src={country.country.flag} />
      <span className="continent">{country.country.continent}</span>
    </li>
  );
};
