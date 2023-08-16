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
  private async filterKeys(data: any) {
    console.log(data[0]);
    const result = data.map((country: any) => {
      const objecto = {
        name: country.name?.common,
        capital: country.capital,
        coatOfArm: country.coatOfArms?.png,
        continent: country.continents,
        currencies: country.currencies,
        demonym: country.demonyms?.eng?.f,
        flag: country.flags?.png,
        language: country.languages,
        // country.maps,
        // country.name,
        // country.population,
        // country.timezone}
      };
      return objecto;
    });

    await result.forEach((element) => {
      console.log(element.capital + '  ' + element.name);
    });
    // console.log(await result[0]);

    return result;
  }

  async getAll() {
    const response = await fetch(this.urlBase);
    const data: [] = await response.json();
    const arrayCountries = await this.filterKeys(data);
    return arrayCountries;
  }
}
