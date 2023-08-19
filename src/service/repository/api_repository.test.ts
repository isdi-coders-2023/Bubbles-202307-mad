import { mockArrCountries } from '../countries_data';
import { ApiRepository } from './api_repository';

describe('Given the class ApiRepository', () => {
  describe('When its instantiate a new ApiRepository', () => {
    const mockRepo = new ApiRepository('');

    test('Then we expected getAll method to be called', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue(mockArrCountries),
      });
      mockRepo.getAll();
      expect(global.fetch).toHaveBeenCalled();
    });
  });
});
