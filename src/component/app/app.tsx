import { menuOptions } from '../../config';
import { AppRoutes } from '../app_routes/app_routes';
// import { Countries } from '../countries/countries';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <AppRoutes options={menuOptions}></AppRoutes>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
