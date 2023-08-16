import { useCallback, useMemo, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import * as ac from '../reducer/countries.action.creator';
import { countriesReducer } from '../reducer/countries.reducer';
import { ApiRepository } from '../service/repository/apiRepository';
const urlBase = 'https://restcountries.com/v3.1/all';
export function useCountries() {
  const repo = useMemo(() => new ApiRepository(urlBase), []);
  const navigate = useNavigate();

  const [countries, dispatch] = useReducer(countriesReducer, []);

  const loadAllCountries = useCallback(async () => {
    try {
      const countries = await repo.getAll();
      dispatch(ac.loadAllCountriesActionCreator(countries));
    } catch (error) {
      console.error((error as Error).message);
      navigate('/error');
    }
  }, [repo]);

  return {
    loadAllCountries,
    countries,
  };
}
