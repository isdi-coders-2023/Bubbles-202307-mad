import { Link } from 'react-router-dom';
import { CountryType } from '../../model/country_type';
import { ApiRepository } from '../../service/repository/repository';
import styles from './card.module.scss';
type Props = {
  country: CountryType;
};
export const Card = (country: Props) => {
  const pepe = async () => {
    const repo = await new ApiRepository('https://restcountries.com/v3.1/all');
    const response = repo.getAll();
    return response;
  };
  pepe();
  return (
    <li className={styles.li}>
      <Link className={styles.card} to={`/country/${country.country.name}`}>
        <span className={styles.name}>{country.country.name}</span>
        <img className={styles.flag} src={country.country.flag} />
        <span className={styles.continent}>{country.country.continent}</span>
      </Link>
    </li>
  );
};
