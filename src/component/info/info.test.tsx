import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { AppContextProvider } from '../../context/app_context_provider';
import { Info } from './info';
describe('Given the component Header', () => {
  describe('When we render it', () => {
    render(
      <Router>
        <AppContextProvider>
          <Info></Info>
        </AppContextProvider>
      </Router>
    );
    test('Then component should be in the document', () => {
      const element = screen.getByRole('button');
      expect(element).toBeInTheDocument();
    });
  });
});
