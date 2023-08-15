import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Error404 from './error_404';

describe('Given the component Error404', () => {
  describe('When we render it', () => {
    render(<Error404></Error404>);
    test('Then the component should be in the document', () => {
      const h2 = screen.getAllByRole('heading');
      const emoti = screen.getByAltText('World emoticon');
      const link = screen.getByText('Back to home');
      expect(h2[0]).toBeInTheDocument();
      expect(emoti).toBeInTheDocument();
      expect(link).toBeInTheDocument();
    });
  });
});
