import {Api} from 'settings/api';
import {getApiAuthToken} from 'services/api-auth-token';
import axios, {
  AxiosInstance,
  AxiosRequestConfig
} from 'axios';

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: `${Api.BackendUrl}`,
    timeout: Number(Api.TimeoutInMilliseconds),
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getApiAuthToken();

      if (token) {
        config.headers[Api.AuthTokenRequestName] = token;
      }

      return config;
    },
  );

  return api;
};
