import {Api} from 'settings/api';
import {ApiAuthToken} from 'types/api-auth-token';

const deleteApiAuthToken = (): void => localStorage.removeItem(Api.TokenName);

const getApiAuthToken =  (): ApiAuthToken => localStorage.getItem(Api.TokenName) ?? '';

const saveApiAuthToken = (token: ApiAuthToken): void => localStorage.setItem(Api.TokenName, token);

export {
  deleteApiAuthToken,
  getApiAuthToken,
  saveApiAuthToken
};
