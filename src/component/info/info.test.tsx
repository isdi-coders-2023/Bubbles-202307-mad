import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Info } from './info';
describe('Given the component Header', () => {
  describe('When we render it', () => {
    render(
      <Router>
        <Info></Info>
      </Router>
    );
    test('Then component should be in the document', () => {
      const element = screen.getByRole('button');
      expect(element).toBeInTheDocument();
    });
  });
});
