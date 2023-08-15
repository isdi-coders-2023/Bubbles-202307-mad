import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { PageControler } from './page_controler';

describe('Given the component page_controler', () => {
  describe('When we render it', () => {
    render(<PageControler></PageControler>);
    test('the component should be in the document', () => {
      const element = screen.getByRole('page_controler');
      expect(element).toBeInTheDocument();
    });
  });
});
