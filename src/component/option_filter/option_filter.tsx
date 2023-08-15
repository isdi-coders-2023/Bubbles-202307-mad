import { continentOption } from '../../config';

export function OptionFilter() {
  return (
    <>
      <select defaultValue="">
        <option value="" selected disabled>
          Elija un continente
        </option>
        {continentOption.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </>
  );
}
