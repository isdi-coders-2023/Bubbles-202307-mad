import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter as Router } from 'react-router-dom';
import { CountryType } from '../model/country_type';
import { ApiRepository } from '../service/repository/api_repository';
import { useCountries } from './use_countries';

describe('Given custom hook useCountries', () => {
  const mockCountry: CountryType = {
    name: 'Saudi Arabia',
    continent: 'Asia',
    flag: 'https://flagcdn.com/w320/sa.png',
    coatOfArm: 'https://mainfacts.com/media/images/coats_of_arms/sa.png',
    capital: '',
    language: 'Arabic',
    demonym: 'Saudi Arabian',
    currencies: '',
    population: 26545864,
    timezone: 'UTC+03:00',
    maps: 'https://goo.gl/maps/5PSjvdJ1AyaLFRrG9',
  };

  const TestComponent = () => {
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => jest.fn().mockImplementation(),
    }));
    const { loadAllCountries, loadCountryInfo, filterByContinent, countries } =
      useCountries();
    return (
      <div>
        <button onClick={() => loadAllCountries()}>1</button>
        <button onClick={() => loadCountryInfo(mockCountry)}>2</button>
        <button onClick={() => filterByContinent('')}>3</button>
        <p>{countries[0]?.name}</p>
        <p>{mockCountry.name}</p>
      </div>
    );
  };

  describe('When the component run the hook', () => {
    ApiRepository.prototype.getAll = jest
      .fn()
      .mockResolvedValue([{ name: 'China' }]);

    beforeEach(() => {
      render(
        <Router>
          <TestComponent></TestComponent>
        </Router>
      );
    });

    test('The component should be in the document', () => {
      const element = screen.getAllByRole('button');
      expect(element[0]).toBeInTheDocument();
    });
    test('If we click button 1 new state should be render', async () => {
      const buttons = screen.getAllByRole('button');
      await userEvent.click(buttons[0]);
      const countryElement = await screen.findByText('China');
      expect(countryElement).toBeInTheDocument();
    });
    test('If we click button 2 new state should be render', async () => {
      const buttons = screen.getAllByRole('button');
      await userEvent.click(buttons[1]);
      const countryElement = await screen.findByText('Saudi Arabia');
      expect(countryElement).toBeInTheDocument();
    });
    test('If we click button 3 new state should be render', async () => {
      const buttons = screen.getAllByRole('button');
      await userEvent.click(buttons[2]);
      const countryElement = await screen.findByText('Saudi Arabia');
      expect(countryElement).toBeInTheDocument();
    });
  });
});
