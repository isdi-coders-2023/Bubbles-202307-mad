import { CountryType } from '../model/country_type';
import { CountryAction } from './countries.action.creator';
import { actionTypeNames } from './countries.action.names';

export type CountriesState = CountryType[] | CountryType;
export function countriesReducer(
  state: CountriesState,
  action: CountryAction
): CountryType[] {
  switch (action.type) {
    case actionTypeNames.loadAllCountries:
      return action.payload as CountryType[];

    case actionTypeNames.filterCountries:
      return action.payload as CountryType[];
    default:
      return { ...(state as CountryType[]) };
  }
}
export function countryInfoReducer(
  state: CountriesState,
  action: CountryAction
): CountryType {
  switch (action.type) {
    case actionTypeNames.loadActualCardInfo:
      return action.payload as CountryType;

    default:
      return { ...(state as CountryType) };
  }
}
