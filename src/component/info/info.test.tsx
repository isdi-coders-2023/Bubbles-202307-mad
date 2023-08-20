import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { AppContext, AppContextStructure } from '../../context/app_context';
import { Info } from './info';
describe('Given the component Info', () => {
  const mockCountry = {
    name: 'Saudi Arabia',
    continents: ['Asia'],
    flag: 'https://flagcdn.com/w320/sa.png',
    coatOfArm: 'https://mainfacts.com/media/images/coats_of_arms/sa.png',
    capital: { eng: { eng: 'English' } },
    languages: 'Arabic',
    demonym: 'Saudi Arabian',
    currencies: null,
    population: 26545864,
    timezone: 'UTC+03:00',
    maps: 'https://goo.gl/maps/5PSjvdJ1AyaLFRrG9',
  };
  describe('When we render it', () => {
    const mockContextValue: AppContextStructure = {
      countriesContext: {
        countryInfo: {
          mockCountry,
        },
      },
    } as unknown as AppContextStructure;
    render(
      <AppContext.Provider value={mockContextValue}>
        <Router>
          <Info></Info>
        </Router>
      </AppContext.Provider>
    );
    test('Then component should be in the document', () => {
      const element = screen.getByRole('button');
      expect(element).toBeInTheDocument();
    });
  });
});
