import { menuOptions } from '../../config';
import { AppRoutes } from '../app_routes/app_routes';
import { Footer } from '../footer/footer';
import { FormCountry } from '../form_add_countries/form';
import { Header } from '../header/header';

function App() {
  return (
    <>
      <Header></Header>
      <FormCountry></FormCountry>
      <main>
        <AppRoutes options={menuOptions}></AppRoutes>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
