import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Card } from './card';
describe('Given the component card', () => {
  describe('When we render it', () => {
    const mockProps = {
      name: '',
      flag: '',
      continent: '',
    };
    render(<Card {...mockProps}></Card>);
    test('Then the component should be in the document', () => {});
    const element = screen.getByRole('listitem');
    expect(element).toBeInTheDocument();
  });
});
