import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { AppContext, AppContextStructure } from '../../context/app_context';
import { OptionFilter } from './option_filter';

jest.mock('../../hooks/use_countries');

describe('Given the componente OptionFilter', () => {
  describe('When we render it', () => {
    const filterByCountryMock = jest.fn();
    const mockContextValue: AppContextStructure = {
      countriesContext: {
        filterByCountryMock: filterByCountryMock,
      },
    } as unknown as AppContextStructure;
    render(
      <AppContext.Provider value={mockContextValue}>
        <Router>
          <OptionFilter></OptionFilter>
        </Router>
      </AppContext.Provider>
    );
    test('the component should be in the document', () => {
      const elementOption = screen.getAllByRole('option');
      expect(elementOption[0]).toBeInTheDocument();
    });
  });
});
