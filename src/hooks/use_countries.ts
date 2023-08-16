import { useCallback, useMemo, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { CountryType } from '../model/country_type';
import * as ac from '../reducer/countries.action.creator';
import {
  countriesReducer,
  countryInfoReducer,
} from '../reducer/countries.reducer';
import { mockArrCountries } from '../service/countries_data';
import { ApiRepository } from '../service/repository/apiRepository';

const urlBase = 'https://restcountries.com/v3.1/all';

export function useCountries() {
  const repo = useMemo(() => new ApiRepository(urlBase), []);
  const navigate = useNavigate();

  const [countries, dispatch] = useReducer(countriesReducer, []);
  const [countryInfo, dispatch2] = useReducer(
    countryInfoReducer,
    mockArrCountries[0]
  );

  const loadAllCountries = useCallback(async () => {
    try {
      const countries = await repo.getAll();
      dispatch(ac.loadAllCountriesActionCreator(countries));
    } catch (error) {
      console.error((error as Error).message);
      navigate('/error');
    }
  }, [repo]);
  const loadCountryInfo = (country: CountryType) => {
    dispatch2(ac.loadCardInfoActionCreater(country));
  };

  return {
    loadAllCountries,
    loadCountryInfo,
    countries,
    countryInfo,
  };
}
