import { CountryType } from '../../model/country_type';
import { PrivateCard } from '../private_card/private_card';
import styles from './countries.module.scss';
export const PrivateCountries = () => {
  return (
    <section className={styles.section}>
      <ol className={styles.ol}>
        <PrivateCard country={{} as CountryType}></PrivateCard>
      </ol>
    </section>
  );
};
