import { ReactNode } from 'react';
import { useCountries } from '../hooks/use_countries';
import { AppContext, AppContextStructure } from './app.context';

type Props = {
  children: ReactNode;
};
export function AppContextProvider({ children }: Props) {
  const context: AppContextStructure = {
    countriesContext: useCountries(),
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
