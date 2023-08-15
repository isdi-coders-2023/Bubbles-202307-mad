import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Card } from './card';
describe('Given the component card', () => {
  describe('When we render it', () => {
    const mockCountry = {
      name: 'Saudi Arabia',
      continent: 'Asia',
      flag: 'https://flagcdn.com/w320/sa.png',
      coatOfArmy: 'https://mainfacts.com/media/images/coats_of_arms/sa.png',
      capital: 'Riyadh',
      language: 'Arabic',
      demonym: 'Saudi Arabian',
      currencies: 'Central African CFA franc',
      population: 26545864,
      timezone: 'UTC+03:00',
      maps: 'https://goo.gl/maps/5PSjvdJ1AyaLFRrG9',
    };
    render(<Card key={0} country={mockCountry}></Card>);
    test('Then the component should be in the document', () => {});
    const element = screen.getByRole('listitem');
    expect(element).toBeInTheDocument();
  });
});
