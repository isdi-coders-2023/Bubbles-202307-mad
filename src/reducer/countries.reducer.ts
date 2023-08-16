import { CountryType } from '../model/country_type';
import { CountryAction } from './countries.action.creator';
import { actionTypeNames } from './countries.action.names';

export type CountriesState = CountryType[];
export function countriesReducer(
  state: CountriesState,
  action: CountryAction
): CountriesState {
  switch (action.type) {
    case actionTypeNames.loadAllCountries:
      return action.payload as CountryType[];

    default:
      return { ...state };
  }
}
