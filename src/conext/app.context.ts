import { createContext } from 'react';
import { useCountries } from '../hooks/use_countries';

export type AppContextStructure = {
  sample: string;
  countriesContext: ReturnType<typeof useCountries>;
};

export const AppContext = createContext<AppContextStructure>(
  {} as AppContextStructure
);
