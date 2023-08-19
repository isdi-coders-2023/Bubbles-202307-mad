import { useContext } from 'react';
import { continentOption } from '../../config';
import { AppContext } from '../../context/app_context';

export function OptionFilter() {
  const {
    countriesContext: { filterByContinent },
  } = useContext(AppContext);
  return (
    <>
      <select
        onChange={(event) =>
          filterByContinent((event.target as HTMLSelectElement).value)
        }
        defaultValue="defaultValue"
      >
        <option value="defaultValue" disabled>
          Choose a continent
        </option>
        {continentOption.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
}
