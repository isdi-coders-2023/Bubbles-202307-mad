// Action = objeto
// Propiedad type -> obligatoria
// Propiedad payload (data) -> opcional

import { CountryType } from '../model/country_type';
import { actionTypeNames } from './countries.action.names';

type Keys = keyof typeof actionTypeNames;

export type CountryAction = {
  type: (typeof actionTypeNames)[Keys];
  payload: CountryType[] | CountryType | number | string;
};

// CRUD

export const loadAllCountriesActionCreator = (
  data: CountryType[]
): CountryAction => {
  return {
    type: actionTypeNames.loadAllCountries,
    payload: data,
  };
};

export const loadCardInfoActionCreator = (data: CountryType): CountryAction => {
  return {
    type: actionTypeNames.loadActualCardInfo,
    payload: data,
  };
};

export const filterCountriesCreator = (data: CountryType[]): CountryAction => {
  return {
    type: actionTypeNames.filterByContinent,
    payload: data,
  };
};
