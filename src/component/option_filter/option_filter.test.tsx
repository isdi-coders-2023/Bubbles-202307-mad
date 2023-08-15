import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { OptionFilter } from './option_filter';

describe('Given the componente OptionFilter', () => {
  describe('When we render it', () => {
    render(<OptionFilter></OptionFilter>);
    test('the component should be in the document', () => {
      const elementOption = screen.getAllByRole('option');
      expect(elementOption[0]).toBeInTheDocument();
    });
  });
});
