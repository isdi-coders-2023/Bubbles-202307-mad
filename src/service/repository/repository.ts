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
      const countryData = {
        name: country.name?.common,
        capital: country.capital,
        coatOfArm: country.coatOfArms?.png,
        continent: country.continents,
        currencies: country.currencies,
        demonym: country.demonyms?.eng?.f,
        flag: country.flags?.png,
        language: country.languages,
        maps: country.maps.googleMaps,
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
