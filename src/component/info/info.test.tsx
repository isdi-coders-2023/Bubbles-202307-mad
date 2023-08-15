import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Info } from './info';

describe('Given the component Info', () => {
  describe('When we render it', () => {
    render(
      <Info
        country={{
          name: '',
          continent: '',
          flag: '',
          coatOfArmy: '',
          capital: '',
          language: '',
          demonym: '',
          currencies: '',
          population: 0,
          timezone: '',
          maps: '',
        }}
      ></Info>
    );
    test('Then component should be in the document', () => {
      const element = screen.getByRole('info');
      const text = screen.getByText('name');
      const image = screen.getByRole('flag of army');

      expect(element).toBeInTheDocument();
      expect(text).toBeInTheDocument();
      expect(image).toBeInTheDocument();
    });
  });
});
