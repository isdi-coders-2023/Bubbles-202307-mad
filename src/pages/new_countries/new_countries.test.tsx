import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import PageFormCountries from './new_countries';

describe('Given the page newCountries', () => {
  describe('When we render it', () => {
    beforeEach(() => {
      render(
        <Router>
          <PageFormCountries></PageFormCountries>
        </Router>
      );
    });

    test('Then component should be in the document', () => {
      const element = screen.getByRole('form');

      expect(element).toBeInTheDocument();
    });
  });
});
