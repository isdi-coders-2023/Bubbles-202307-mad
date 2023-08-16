import { CountryType } from '../../model/country_type';

export interface Repository<T extends { name: string }> {
  getAll(): Promise<T[]>;
}

export class ApiRepository implements Repository<CountryType> {
  urlBase: string;
  constructor(urlBase: string) {
    this.urlBase = urlBase;
  }
  private f() {}
  async getAll() {
    const response = await fetch(this.urlBase);
    const data: [] = await response.json();
    return data;
  }
}
