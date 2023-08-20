import { CountryType } from '../../model/country_type';

export interface Repository<T extends { name: string }> {
  getAll(): Promise<T[]>;
  getByName(name: T['name']): Promise<T>;
  create(item: Omit<T, 'id'>): Promise<T>;
  delete(name: T['name']): Promise<void>;
  update(name: T['name'], _item: Partial<T>): Promise<T>;
}

export class PrivateRepository implements Repository<CountryType> {
  urlBase: string;
  constructor(urlBase: string) {
    this.urlBase = urlBase;
  }
  async getByName(name: string): Promise<CountryType> {
    const url = this.urlBase + '/' + name;
    const response = await fetch(url);
    // if (!response.ok)
    //   throw new Error(`Error ${response.status}: ${response.statusText}`);
    const data = await response.json();
    return data;
  }

  async getAll(): Promise<CountryType[]> {
    const response = await fetch(this.urlBase);
    // if (!response.ok)
    //   throw new Error(`Error ${response.status}: ${response.statusText}`);
    const data = await response.json();
    return data;
  }

  async create(country: CountryType) {
    const response = await fetch(this.urlBase, {
      method: 'POST',
      body: JSON.stringify(country),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // if (!response.ok)
    //   throw new Error(`Error ${response.status}: ${response.statusText}`);
    const data = await response.json();
    return data;
  }
  async delete(name: string): Promise<void> {
    const url = this.urlBase + '/' + name;
    /*const response =*/ await fetch(url, {
      method: 'DELETE',
    });

    // if (!response.ok)
    //   throw new Error(`Error ${response.status}: ${response.statusText}`);
  }

  async update(
    name: string,
    country: Partial<CountryType>
  ): Promise<CountryType> {
    const url = this.urlBase + '/' + name;
    const response = await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(country),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // if (!response.ok)
    //   throw new Error(`Error ${response.status}: ${response.statusText}`);
    const data = await response.json();
    return data;
  }
}
