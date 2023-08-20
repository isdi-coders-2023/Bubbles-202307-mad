import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { FormCountry } from '../../component/form_add_countries/form';

describe('Given the page newCountries', () => {
  describe('When we render it', () => {
    beforeEach(() => {
      render(
        <Router>
          <FormCountry></FormCountry>
        </Router>
      );
    });

    test('Then component should be in the document', () => {
      const element = screen.getByRole('form');

      expect(element).toBeInTheDocument();
    });
  });
});
