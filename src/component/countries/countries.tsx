import { useContext, useEffect } from 'react';
import { AppContext } from '../../conext/app.context';
import { Card } from '../card/card';
import { OptionFilter } from '../option_filter/option_filter';
import { PageControler } from '../page_controler/page_controler';
import styles from './countries.module.scss';
export function Countries() {
  // const { countries, loadAllCountries } = useCountries();

  const {
    countriesContext: { loadAllCountries, countries },
  } = useContext(AppContext);

  useEffect(() => {
    loadAllCountries();
  }, [loadAllCountries]);

  return (
    <section className={styles.section}>
      <OptionFilter></OptionFilter>
      <ol className={styles.ol}>
        {countries.map((item, index) => (
          <Card key={index} country={item}></Card>
        ))}
      </ol>
      <PageControler></PageControler>
    </section>
  );
}
