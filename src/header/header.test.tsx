import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Header } from './header';

describe('Given the component Header', () => {
  describe('When we render it', () => {
    render(<Header></Header>);
    test('Then component should be in the document', () => {
      const element = screen.getByRole('heading');
      const text = screen.getByText('countries of the world');
      const image = screen.getByAltText('Image of the world');
      expect(element).toBeInTheDocument();
      expect(text).toBeInTheDocument();
      expect(image).toBeInTheDocument();
    });
  });
});
