import * as React from 'react';
import axios from 'axios';
import { PingQueryResponse } from './models';
const useApi = () => {
  return {
    ping: async () => {
      const response = await axios.get<PingQueryResponse>('/ping');
      return response.data;
    }
  };
};
export default useApi;
