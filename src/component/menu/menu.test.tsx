import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Menu } from './menu';
describe('Given the componente Menu', () => {
  describe('When we render it', () => {
    render(
      <Router>
        <Menu></Menu>
      </Router>
    );

    test('the component should be in the document', () => {
      const element = screen.getByText('Your countries');
      expect(element).toBeInTheDocument();
    });
  });
});
