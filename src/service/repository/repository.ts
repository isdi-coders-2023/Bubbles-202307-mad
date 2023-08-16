import { CountryType } from '../../model/country_type';

export interface Repository<T extends { name: string }> {
  getAll(): Promise<T[]>;
}
const urlBase = 'https://restcountries.com/v3.1/all';
export class ApiRepository implements Repository<CountryType> {
  urlBase: string;
  constructor(urlBase: string) {
    this.urlBase = urlBase;
  }
  private filterKeys(data: any) {
    console.log(data[0]);
    const result = data.map((country: any) => {
      const objecto = {
        capital: country.capital,
        coatOfArm: country.coatOfArms,
        continent: country.continents,
        currencies: country.currencies,
        demonym: country.demonyms.eng,
        flag: country.flags.png,
        language: country.languages,
        // country.maps,
        // country.name,
        // country.population,
        // country.timezone}
      };
      return objecto;
    });
    console.log(result[0]);
    console.log(result[0].demonym.eng.f);
    return result;
  }

  async getAll() {
    const response = await fetch(this.urlBase);
    const data: [] = await response.json();
    const arrayCountries = await this.filterKeys(data);
    return arrayCountries;
  }
}
