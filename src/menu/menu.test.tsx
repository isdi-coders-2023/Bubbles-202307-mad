import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Menu } from './Menu';

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
