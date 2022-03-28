import {Api} from 'settings/api';
import axios, {
  AxiosInstance,
  AxiosRequestConfig
} from 'axios';
import {getApiAuthToken} from 'services/api-auth-token';

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: `${Api.BackendUrl}`,
    timeout: Number(Api.TimeoutInMilliseconds),
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getApiAuthToken();

      if (token) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  return api;
};
