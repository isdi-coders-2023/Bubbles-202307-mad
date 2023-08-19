import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContextProvider } from '../../context/app_context_provider';
import Error404 from './error_404';
describe('Given the component Error404', () => {
  describe('When we render it', () => {
    render(
      <Router>
        <AppContextProvider>
          <Error404></Error404>
        </AppContextProvider>
      </Router>
    );
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
