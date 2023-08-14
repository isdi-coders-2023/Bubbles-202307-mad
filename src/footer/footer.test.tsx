import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Footer } from './Footer';

describe('Given the component Footer', () => {
  describe('When we render it', () => {
    render(<Footer></Footer>);
    test('the component should be in the document footer', () => {
      const element = screen.getByText('Around the World');
      expect(element).toBeInTheDocument();
    });
  });
});
