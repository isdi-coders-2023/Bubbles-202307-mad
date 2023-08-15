import { continentOption } from '../../config';

export function OptionFilter() {
  return (
    <>
      <select defaultValue="">
        <option value="" disabled>
          Elija un continente
        </option>
        {continentOption.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
}
