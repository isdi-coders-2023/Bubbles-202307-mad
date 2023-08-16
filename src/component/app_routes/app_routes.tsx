import { Suspense, lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { MenuOption } from '../../model/menu_options';
import { mockArrCountries } from '../../service/countries_data';
import { Info } from '../info/info';

const Home = lazy(() => import('../../pages/home/home'));
// const Favorites = lazy(() => import(''));
// const Info = lazy(() => import(''));
const Error = lazy(() => import('../../pages/error/error'));
type Props = {
  options: MenuOption[];
};
export const AppRoutes = ({ options }: Props) => {
  const paths = options.map((item) => item.path);
  const country = useLocation();
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="*" element={<Home></Home>}></Route>
        <Route
          path="/countries/:country"
          element={<Info country={mockArrCountries[0]}></Info>}
        />
        <Route path={paths[0]} element={<Home></Home>}></Route>
        <Route path={paths[1]} element={<></>}></Route>
        <Route path={paths[2]} element={<Error></Error>}></Route>
      </Routes>
    </Suspense>
  );
};
