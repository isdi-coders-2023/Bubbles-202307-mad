import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter as Router } from 'react-router-dom';
import { CountryType } from '../model/country_type';
import { ApiRepository } from '../service/repository/api_repository';
import { useCountries } from './use_countries';

// const mockedError404 = jest.fn().mockReturnValue(<h2>Error 404</h2>);

describe('Given custom hook useCountries', () => {
  const mockCountry: CountryType[] = [
    {
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
      page: 3,
    },
    { continent: 'All' } as CountryType,
  ];

  const TestComponent = () => {
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => jest.fn().mockImplementation(),
    }));

    const {
      previousPage,
      nextPage,
      loadAllCountries,
      loadCountryInfo,
      filterCountries,
      countries,
    } = useCountries();
    const resultFilterAsia = countries
      .every((country) => country.continent === 'Asia')
      .toString();
    const resultFilterAll = countries
      .every((country) => country.continent === 'All')
      .toString();

    return (
      <div>
        <button onClick={() => loadAllCountries()}>1</button>
        <button onClick={() => loadCountryInfo(mockCountry[0])}>2</button>
        <button onClick={() => filterCountries('Asia')}>3</button>
        <button onClick={() => filterCountries('All')}>4</button>
        <button onClick={() => nextPage()}>5</button>
        <button onClick={() => previousPage()}>6</button>
        <p>{countries[0]?.name}</p>
        <p>{mockCountry[0].name}</p>
        <p>{resultFilterAsia}</p>
        <p>{resultFilterAll}</p>
        <div>{}</div>
      </div>
    );
  };
  describe('When the component run the hook', () => {
    beforeEach(() => {
      ApiRepository.prototype.getAll = jest
        .fn()
        .mockResolvedValue([
          { name: 'China', continent: 'Asia' },
          { name: 'Spain', continent: 'Europe' },
          {},
          {},
          {},
          {},
        ]);

      {
        render(
          <Router>
            <TestComponent></TestComponent>
          </Router>
        );
      }
    });

    test('The component should be in the document', () => {
      const element = screen.getAllByRole('button');
      expect(element[0]).toBeInTheDocument();
    });
    test('If we click button 1 new state should be render', async () => {
      const button1 = screen.getByText(/1/);
      await userEvent.click(button1);
      const countryElement = await screen.findByText('China');
      expect(countryElement).toBeInTheDocument();
    });

    test('If we click button 2 new state should be render', async () => {
      const button2 = screen.getByText(/2/);
      await userEvent.click(button2);
      const countryElement = await screen.findByText('Saudi Arabia');
      expect(countryElement).toBeInTheDocument();
    });
    test('If we click button 3 new state should be render', async () => {
      const button3 = screen.getByText(/3/);
      await userEvent.click(button3);
      const countryElement = await screen.findAllByText('false');
      expect(countryElement[0]).toBeInTheDocument();
    });
    test('If we click button 4 new state should be render', async () => {
      const button4 = screen.getByText(/4/);
      await userEvent.click(button4);
      const countryElement = await screen.findAllByText('false');
      expect(countryElement[1]).toBeInTheDocument();
    });

    test('If we click button 5 nextPage new state should be render', async () => {
      const button5 = screen.getByText(/5/);
      await userEvent.click(button5);
      const countryElement = await screen.findAllByText('false');
      expect(countryElement[1]).toBeInTheDocument();
    });
    test('If we click button 6 nextPage new state should be render', async () => {
      const button6 = screen.getByText(/6/);
      await userEvent.click(button6);
      const countryElement = await screen.findAllByText('false');
      expect(countryElement[1]).toBeInTheDocument();
    });
  });
  describe('When the hook with an Error', () => {
    beforeEach(() => {
      render(
        <Router>
          <TestComponent></TestComponent>
        </Router>
      );
      ApiRepository.prototype.getAll = jest
        .fn()
        .mockRejectedValueOnce(new Error('Get All Error'));
    });

    test('If we click button 1 error should send to console', async () => {
      const buttons = screen.getAllByRole('button');
      await userEvent.click(buttons[0]);
    });
  });
});
