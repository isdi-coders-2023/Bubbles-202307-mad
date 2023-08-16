import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';
import { menuOptions } from '../../config';
import { MenuOption } from '../../model/menu_options';

import { MemoryRouter as Router } from 'react-router-dom';
import { AppRoutes } from './app_routes';

describe('Given the componente AppRoutes', () => {
  const optionsMock: MenuOption[] = menuOptions;
  describe('When we render it with the route "/countries"', () => {
    test('the component should render Home', async () => {
      await act(async () => {
        render(
          <Router initialEntries={['/countries']}>
            <AppRoutes options={optionsMock}></AppRoutes>
          </Router>
        );
      });
      const element = screen.getByRole('option', {
        name: 'Asia',
      });
      expect(element).toBeInTheDocument();
    });
  });

  describe('When we render it with the route "/error"', () => {
    test('the component should render Error404', async () => {
      await act(async () => {
        render(
          <Router initialEntries={['/error']}>
            <AppRoutes options={optionsMock}></AppRoutes>
          </Router>
        );
      });
      const element = screen.getByRole('heading', {
        name: 'Page not found',
      });
      expect(element).toBeInTheDocument();
    });
  });
});
