import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
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
    render(
      <Router>
        <Card key={0} country={mockCountry}></Card>
      </Router>
    );

    test('Then the component should be in the document', () => {
      const element = screen.getByRole('listitem');
      const span1 = screen.getByText(mockCountry.name);
      const span2 = screen.getByText(mockCountry.continent);
      const flag = screen.getByRole('img');
      expect(flag).toBeInTheDocument();
      expect(span1).toBeInTheDocument();
      expect(span2).toBeInTheDocument();
      expect(element).toBeInTheDocument();
    });
  });
});
