import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import { FormCountry } from './form';

describe('Given the component Form', () => {
  describe('When we render it', () => {
    beforeEach(() => {
      render(
        <Router>
          <FormCountry></FormCountry>
        </Router>
      );
    });

    test('Then component should be in the document', () => {
      const element = screen.getByRole('form');
      const text = screen.getByText(/Can you imagine a new country?/);
      const p = screen.getByText(/Please, let me know your invented country/);

      expect(element).toBeInTheDocument();
      expect(text).toBeInTheDocument();
      expect(p).toBeInTheDocument();
    });
    test('The click in the button received the new info', async () => {
      const button = screen.getAllByRole('button');
      await userEvent.click(button[0]);
    });
    test('The click in the button change the info', async () => {
      const button = screen.getAllByRole('buttonChange');
      await userEvent.click(button[1]);
    });
  });
});
