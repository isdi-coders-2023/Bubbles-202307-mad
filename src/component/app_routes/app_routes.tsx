import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MenuOption } from '../../model/menu_options';
import { Info } from '../info/info';

const Home = lazy(() => import('../../pages/home/home'));
const Error404 = lazy(() => import('../../pages/error/error'));
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
        <Route path="/country/:country" element={<Info></Info>} />
        <Route path={paths[0]} element={<Home></Home>}></Route>
        <Route path={paths[1]} element={<></>}></Route>
        <Route path={paths[2]} element={<Error404></Error404>}></Route>
      </Routes>
    </Suspense>
  );
};
