import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MenuOption } from '../../model/menu_options';
import { arrCountries } from '../../service/countries_data';
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
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="*" element={<Home></Home>}></Route>
        <Route
          path="/home/:product"
          element={<Info country={arrCountries[0]}></Info>}
        />
        <Route path={paths[0]} element={<Home></Home>}></Route>
        <Route path={paths[1]} element={<></>}></Route>
        <Route path={paths[2]} element={<></>}></Route>
        <Route path={paths[3]} element={<Error></Error>}></Route>
      </Routes>
    </Suspense>
  );
};
