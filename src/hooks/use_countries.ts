import { useCallback, useMemo, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { CountryType } from '../model/country_type';
import * as ac from '../reducer/countries.action.creator';
import {
  countriesReducer,
  countryInfoReducer,
} from '../reducer/countries.reducer';
import { ApiRepository } from '../service/repository/api_repository';

const urlBase = 'https://restcountries.com/v3.1/all';
let allCountries: CountryType[] = [];
export function useCountries() {
  const repo = useMemo(() => new ApiRepository(urlBase), []);
  const navigate = useNavigate();
  const [countries, dispatch] = useReducer(countriesReducer, []);
  const [countryInfo, dispatch2] = useReducer(
    countryInfoReducer,
    {} as CountryType
  );

  const loadAllCountries = useCallback(async () => {
    try {
      const countries = await repo.getAll();
      allCountries = countries;
      dispatch(ac.loadAllCountriesActionCreator(countries));
    } catch (error) {
      navigate('/error');
    }
  }, [repo]);

  const loadCountryInfo = (country: CountryType) => {
    dispatch2(ac.loadCardInfoActionCreater(country));
  };
  const filterByContinent = (continent: string) => {
    if (continent === 'All') {
      return dispatch(ac.filterByContinentCreater(allCountries));
    }
    const filteredCountries = allCountries.filter(
      (country) => country.continent === continent
    );
    dispatch(ac.filterByContinentCreater(filteredCountries));
  };
  return {
    loadAllCountries,
    loadCountryInfo,
    filterByContinent,
    countries,
    countryInfo,
    allCountries,
  };
}
