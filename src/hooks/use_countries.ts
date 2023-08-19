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
let currentContinent = 'All';
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
      allCountries = assignPaginated(countries);
      dispatch(
        ac.loadAllCountriesActionCreator(
          allCountries.filter((country) => country.page === currentPage)
        )
      );
    } catch (error) {
      navigate('/error');
    }
  }, [repo]);

  const loadCountryInfo = (country: CountryType) => {
    dispatch2(ac.loadCardInfoActionCreater(country));
  };
  const filterByContinent = (continent: string) => {
    currentContinent = continent;

    if (currentContinent === 'All') {
      const countries = assignPaginated(allCountries).filter(
        (country) => country.page === currentPage
      );
      return dispatch(ac.filterByContinentCreater(countries));
    } else {
      const countryContinent = allCountries.filter(
        (country) => country.continent === currentContinent
      );
      const countries = assignPaginated(countryContinent).filter(
        (country) => country.page === currentPage
      );
      dispatch(ac.filterByContinentCreater(countries));
    }
  };

  const assignPaginated = (arrCountries: CountryType[]) => {
    const countriesPerPage = 5;
    let totalCountries = 0;
    let page = 1;

    if (!arrCountries.length) {
      arrCountries = allCountries;
    }
    arrCountries = arrCountries.map((country) => {
      if (totalCountries === countriesPerPage) {
        totalCountries = 1;
        page++;
      } else {
        totalCountries++;
      }

      country.page = page;
      return country;
    });
    return arrCountries;
  };

  const nextPage = () => {
    currentPage++;
    filterByContinent(currentContinent);
  };

  return {
    loadAllCountries,
    loadCountryInfo,
    filterByContinent,
    nextPage,
    countries,
    countryInfo,
    allCountries,
  };
}
