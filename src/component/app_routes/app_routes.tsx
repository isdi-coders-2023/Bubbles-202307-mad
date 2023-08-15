import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MenuOption } from '../../model/menu_options';

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
        <Route path={paths[0]} element={<Home></Home>}></Route>
        <Route path={paths[1]} element={<></>}></Route>
        <Route path={paths[2]} element={<></>}></Route>
        <Route path={paths[3]} element={<Error></Error>}></Route>
      </Routes>
    </Suspense>
  );
};
