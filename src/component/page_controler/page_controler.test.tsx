import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { PageControler } from './page_controler';

import { AppContext, AppContextStructure } from '../../context/app_context';

describe('Given the component page_controler', () => {
  describe('When we render it', () => {
    const nextPage = jest.fn();
    const mockContextValue: AppContextStructure = {
      countriesContext: {
        countriesContext: { nextPage },
      },
    } as unknown as AppContextStructure;
    render(
      <AppContext.Provider value={mockContextValue}>
        <PageControler></PageControler>
      </AppContext.Provider>
    );
    test('the component should be in the document', () => {
      const element = screen.getAllByRole('button');
      expect(element[0]).toBeInTheDocument();
      expect(element[1]).toBeInTheDocument();
    });
  });
});
