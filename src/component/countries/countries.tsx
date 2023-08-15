import { arrCountries } from '../../service/countries_data';
import { Card } from '../card/card';
import styles from './countries.module.scss';
import { PageControler } from './page_controler/page_controler';
export function Countries() {
  return (
    <section className={styles.section}>
      <ol className={styles.ol}>
        {arrCountries.map((item, index) => (
          <Card key={index} country={item}></Card>
        ))}
      </ol>
      <PageControler></PageControler>
    </section>
  );
}
