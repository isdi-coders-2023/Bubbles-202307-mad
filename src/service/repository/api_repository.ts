import { CountryType } from '../../model/country_type';

export interface Repository<T extends { name: string }> {
  getAll(): Promise<T[]>;
}

export class ApiRepository implements Repository<CountryType> {
  urlBase: string;
  constructor(urlBase: string) {
    this.urlBase = urlBase;
  }
  private async filterKeys(data: any): Promise<CountryType[]> {
    const result = data.map((country: any) => {
      const language = country.languages
        ? Object.entries(country.languages)[0][1]
        : 'Noot';
      const currencies = country.currencies
        ? (Object.entries(country.currencies) as any)[0][1].name +
          ' ' +
          (Object.entries(country.currencies) as any)[0][1].symbol
        : 'No hay dinero';

      const countryData = {
        name: country.name?.common,
        capital: country.capital,
        coatOfArm: country.coatOfArms?.png,
        continent: country.continents[0],
        currencies: currencies,
        demonym: country.demonyms?.eng?.f,
        flag: country.flags?.png,
        language: language,
        maps: country.maps?.googleMaps,
        population: country.population,
        timezone: country.timezones,
      };
      return countryData;
    });

    return result;
  }

  async getAll(): Promise<CountryType[]> {
    const response = await fetch(this.urlBase);
    const data = await response.json();
    const arrayCountries = await this.filterKeys(data);
    return arrayCountries;
  }
}
