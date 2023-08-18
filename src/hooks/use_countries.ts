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
let currentPage = 1;
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
    assignPaginated();
    if (continent === 'All') {
      assignPaginated();
      return dispatch(ac.filterByContinentCreater(allCountries));
    }
    const filteredCountries = allCountries.filter(
      (country) => country.continent === continent
    );
    dispatch(ac.filterByContinentCreater(filteredCountries));
  };

  const assignPaginated = () => {
    const countriesPerPage = 10;
    let totalCountries = 0;
    let currentPage = 1;
    allCountries = allCountries.map((country) => {
      if (totalCountries > 9) {
        totalCountries = 0;
        currentPage++;
      } else {
        totalCountries++;
      }
      country.page = currentPage;
      return country;
    });
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
