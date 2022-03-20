import {Api} from 'settings/api';
import {ApiAuthToken} from 'types/api-auth-token';

const deleteApiAuthToken = (): void => localStorage.removeItem(Api.AuthTokenLocalName);

const getApiAuthToken =  (): ApiAuthToken => localStorage.getItem(Api.AuthTokenLocalName) ?? '';

const saveApiAuthToken = (token: ApiAuthToken): void => localStorage.setItem(Api.AuthTokenLocalName, token);

export {
  deleteApiAuthToken,
  getApiAuthToken,
  saveApiAuthToken
};
