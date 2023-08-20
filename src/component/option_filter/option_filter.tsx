import { useContext } from 'react';
import { continentOption } from '../../config';
import { AppContext } from '../../context/app_context';
import styles from './option_filter.module.scss';

export function OptionFilter() {
  const {
    countriesContext: { filterCountries, currentContinent },
  } = useContext(AppContext);
  return (
    <>
      <select
        className={styles.select}
        onChange={(event) => {
          filterCountries((event.target as HTMLSelectElement).value);
        }}
        defaultValue={currentContinent}
      >
        <option value="defaultValue" disabled>
          Choose a continent
        </option>
        {continentOption.map((item) => (
          <option className={styles.option} key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
}
