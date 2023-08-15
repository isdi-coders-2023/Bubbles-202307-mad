import { arrCountries } from '../../service/countries_data';
import { Card } from '../card/card';
import { OptionFilter } from '../option_filter/option_filter';
import { PageControler } from '../page_controler/page_controler';
import styles from './countries.module.scss';
export function Countries() {
  return (
    <section className={styles.section}>
      <OptionFilter></OptionFilter>
      <ol className={styles.ol}>
        {arrCountries.map((item, index) => (
          <Card key={index} country={item}></Card>
        ))}
      </ol>
      <PageControler></PageControler>
    </section>
  );
}
