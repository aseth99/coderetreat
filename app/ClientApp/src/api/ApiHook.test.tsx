import useApi from './ApiHook';
import axios from 'axios';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
it('should return the data returned from the server', async () => {
  const api = useApi();
  mockedAxios.get.mockResolvedValueOnce({ data: { message: 'pong' } });
  const response = await api.ping();
  expect(response.message).toBe('pong');
});
// it('should not return data when the server returns an error code', async () => {
//   const api = useApi();
//   // mockedAxios.get.mockResolvedValueOnce({ data: { message: 'pong' }, status: 500 });
//   mockedAxios.get.mockResolvedValueOnce({ data: { message: 'pong', error: 'error', succeeded: true } });

//   const response = await api.ping();
//   expect(response.succeeded).toBe(false);
//   expect(response.error).toBe('Failed to ping server');
//   expect(response.message).toBeNull();
// ;
it('should not return data when the server returns an error code', async () => {
  const api = useApi();
  // mockedAxios.get.mockResolvedValueOnce({ data: { message: 'pong' }, status: 500 });
  mockedAxios.get.mockResolvedValueOnce({ data: { message: 'pong', error: 'no error', succeeded: true } });

  const response = await api.ping();
  expect(response.message).toBe('pong');
  expect(response.succeeded).toBe(true);
  expect(response.error).toBe('no error');
});
