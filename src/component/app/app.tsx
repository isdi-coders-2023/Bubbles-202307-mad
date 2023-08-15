import { arrCountries } from '../../service/countries_data';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { Info } from '../info/info';

function App() {
  return (
    <>
      <Header></Header>
      <Info country={arrCountries[0]}></Info>
      <Footer></Footer>
    </>
  );
}

export default App;
