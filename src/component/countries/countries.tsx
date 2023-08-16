import { useEffect } from 'react';
import { useCountries } from '../../hooks/use_countries';
import { Card } from '../card/card';
import { OptionFilter } from '../option_filter/option_filter';
import { PageControler } from '../page_controler/page_controler';
import styles from './countries.module.scss';
export function Countries() {
  const { countries, loadAllCountries } = useCountries();

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
