import { CountryType } from '../../model/country_type';
import { mockArrCountries } from '../countries_data';
import { PrivateRepository } from './private_repository';

describe('Given the Class PrivateRepository', () => {
  describe('Wen new PrivateRepository is instantiate', () => {
    const mockRepo = new PrivateRepository('');
    test('Then we expect the method getAll to be called', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue(mockArrCountries),
      });
      mockRepo.getAll();
      expect(global.fetch).toBeCalled();
    });
    test('Then we expect the method getByName to be called', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue(mockArrCountries),
      });
      mockRepo.getByName(mockArrCountries[0].name);
      expect(global.fetch).toBeCalled();
    });
    test('Then we expect the method delete to be called', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue(mockArrCountries),
      });
      mockRepo.delete(mockArrCountries[0].name);
      expect(global.fetch).toBeCalled();
    });
    test('Then we expect the method create to be called', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue(mockArrCountries),
      });
      mockRepo.create({} as CountryType);
      expect(global.fetch).toBeCalled();
    });
    test('Then we expect the method create to be called', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue(mockArrCountries),
      });
      mockRepo.update('', {} as CountryType);
      expect(global.fetch).toBeCalled();
    });
  });
});
