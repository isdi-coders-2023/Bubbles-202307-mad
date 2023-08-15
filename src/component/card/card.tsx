import styles from './card.module.scss';
type Props = {
  name: string;
  flag: string;
  continent: string;
};
export const Card = (country: Props) => {
  return (
    <li className={styles.card}>
      <span className="name">{country.name}</span>
      <img className={styles.flag} src={country.flag} />
      <span className="continent">{country.continent}</span>
    </li>
  );
};
