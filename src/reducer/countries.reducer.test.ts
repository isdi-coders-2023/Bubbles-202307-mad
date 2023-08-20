import { CountryType } from '../model/country_type';
import {
  filterCountriesCreator,
  loadAllCountriesActionCreator,
  loadCardInfoActionCreator,
} from './countries.action.creator';
import { countriesReducer, countryInfoReducer } from './countries.reducer';

describe('Given the function countriesReducer', () => {
  describe('When it receives the action loadAllCountries ', () => {
    test('The state should be the action payload', () => {
      //arrange
      const payloadMock = [{ name: 'China' } as CountryType];
      const action = loadAllCountriesActionCreator(payloadMock);
      //act
      const result = countriesReducer([], action);
      expect(result).toEqual(payloadMock);
    });
  });
  describe('When it receives the action filterByContinent ', () => {
    test('The state should be the action payload', () => {
      const payloadMock = [{ name: 'China' } as CountryType];
      const action = filterCountriesCreator(payloadMock);
      const result = countriesReducer([], action);
      expect(result).toEqual(payloadMock);
    });
  });
});
describe('Given the function countryInfoReducer', () => {
  describe('When it receives the action loadActualCardInfo ', () => {
    test('The state should be the action payload', () => {
      //arrange
      const payloadMock = { name: 'China' } as CountryType;
      const action = loadCardInfoActionCreator(payloadMock);
      //act
      const result = countryInfoReducer([], action);
      expect(result).toEqual(payloadMock);
    });
  });
});
