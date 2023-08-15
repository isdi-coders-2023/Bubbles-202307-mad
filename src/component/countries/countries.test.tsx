import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Countries } from './countries';
describe('Given the componente Countries', () => {
  describe('When we render it', () => {
    render(<Countries></Countries>);
    test('the component should be in the document', () => {
      const elementOl = screen.getByRole('list');
      const elementButtons = screen.getAllByRole('button');
      expect(elementOl).toBeInTheDocument();
      expect(elementButtons[0]).toBeInTheDocument();
    });
  });
});
