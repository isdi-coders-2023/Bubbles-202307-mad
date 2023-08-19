import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { menuOptions } from '../../config';
import { AppRoutes } from './app_routes';
jest.mock('../../hooks/use_countries');
const MockedHome = jest.fn().mockReturnValue(<h2></h2>);
jest.mock('../../pages/home/page_home', () => MockedHome);

const MockedError = jest.fn().mockReturnValue(<h2>Page not found</h2>);
jest.mock('../../pages/error/error', () => MockedError);

describe('When we render it with the route "/countries"', () => {
  test('the component should render Countries', async () => {
    await act(async () => {
      render(
        <Router initialEntries={['/countries']}>
          <AppRoutes options={menuOptions}></AppRoutes>
        </Router>
      );
    });
    const element = screen.getAllByRole('heading');
    expect(element[0]).toBeInTheDocument();
  });
});

describe('When we render it with the route "/error"', () => {
  test('the component should render Error404', async () => {
    await act(async () => {
      render(
        <Router initialEntries={['/error']}>
          <AppRoutes options={menuOptions}></AppRoutes>
        </Router>
      );
    });
    const element = screen.getAllByRole('heading');
    expect(element[0]).toBeInTheDocument();
  });
});
