import { createContext } from 'react';
import { useCountries } from '../hooks/use_countries';

export type AppContextStructure = {
  countriesContext: ReturnType<typeof useCountries>;
};

export const AppContext = createContext<AppContextStructure>(
  {} as AppContextStructure
);
