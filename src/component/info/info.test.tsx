import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { AppContext, AppContextStructure } from '../../context/app_context';
import { CountryType } from '../../model/country_type';
import { Info } from './info';
describe('Given the component Info', () => {
  const mockCountry = [
    {
      name: 'Saudi Arabia',
      continents: ['Asia'],
      flag: 'https://flagcdn.com/w320/sa.png',
      coatOfArm: 'pepe',
      capital: { eng: { eng: 'English' } },
      languages: 'Arabic',
      demonym: 'Saudi Arabian',
      currencies: null,
      population: 26545864,
      timezone: 'UTC+03:00',
      maps: 'https://goo.gl/maps/5PSjvdJ1AyaLFRrG9',
    },
  ] as unknown as CountryType;
  describe('When we render it', () => {
    const mockContextValue: AppContextStructure = {
      countriesContext: {
        countryInfo: {
          mockCountry,
        },
      },
    } as unknown as AppContextStructure;
    mockContextValue.countriesContext.countryInfo.coatOfArm = 'pepe';
    mockContextValue.countriesContext.countryInfo.name = 'pepe';
    render(
      <AppContext.Provider value={mockContextValue}>
        <Router>
          <Info></Info>
        </Router>
      </AppContext.Provider>
    );
    test('Then component should be in the document', () => {
      const element = screen.getByRole('button');
      const text = screen.getByText('pepe');
      expect(element).toBeInTheDocument();
      expect(text).toBeInTheDocument();
    });
  });
});
