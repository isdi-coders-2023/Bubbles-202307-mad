import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { AppContextProvider } from '../../context/app_context_provider';
import { OptionFilter } from './option_filter';

describe('Given the componente OptionFilter', () => {
  describe('When we render it', () => {
    render(
      <AppContextProvider>
        <Router>
          <OptionFilter></OptionFilter>
        </Router>
      </AppContextProvider>
    );
    test('the component should be in the document', () => {
      const elementOption = screen.getAllByRole('option');
      expect(elementOption[0]).toBeInTheDocument();
    });
  });
});
