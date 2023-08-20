import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { PrivateCountries } from './private_countries';

describe('Given the component PrivateCountries', () => {
  describe('When we render it', () => {
    render(
      <MemoryRouter>
        <PrivateCountries></PrivateCountries>
      </MemoryRouter>
    );
    test('The component should be in the document', () => {
      const element = screen.getByRole('list');
      expect(element).toBeInTheDocument();
    });
  });
});
