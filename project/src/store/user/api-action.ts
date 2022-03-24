import {api, store} from 'store/store';
import {ApiRoute} from 'settings/api';
import {AuthData} from 'types/auth-data';
import {AuthorizationStatus} from 'settings/authorization-status';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {handleError} from 'services/handleError';
import {deleteApiAuthToken, saveApiAuthToken} from 'services/api-auth-token';
import {
  resetUser,
  setAuthorization,
  setErrorMessage,
  setUser
} from 'store/user/action';
import {SHOW_ERROR_TIMEOUT} from 'settings/const';

export const resetErrorMessage = createAsyncThunk(
  'user/resetErrorMessage',
  () => {
    setTimeout(
      () => {
        store.dispatch(setErrorMessage(''));
      },
      SHOW_ERROR_TIMEOUT,
    );
  },
);

export const checkAuthorization = createAsyncThunk(
  'user/checkAuthorization',
  async () => {
    try {
      const {data} = await api.get(ApiRoute.Login);
      store.dispatch(setAuthorization(AuthorizationStatus.Auth));
      store.dispatch(setUser({
        avatarUrl: data.avatarUrl,
        email: data.email,
        id: data.id,
        isPro: data.isPro,
        name: data.name,
      }));
    } catch(error) {
      handleError(error);
      store.dispatch(setAuthorization(AuthorizationStatus.NotAuth));
    }
  },
);

export const loginUser = createAsyncThunk(
  'user/login',
  async ({email, password}: AuthData) => {
    try {
      const {data} = await api.post(ApiRoute.Login, {email, password});
      store.dispatch(setAuthorization(AuthorizationStatus.Auth));
      store.dispatch(setUser({
        avatarUrl: data.avatarUrl,
        email: data.email,
        id: data.id,
        isPro: data.isPro,
        name: data.name,
      }));
      saveApiAuthToken(data.token);
    } catch(error) {
      handleError(error);
      store.dispatch(setAuthorization(AuthorizationStatus.NotAuth));
    }
  },
);

export const logoutUser = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(ApiRoute.Logout);
      deleteApiAuthToken();
      store.dispatch(setAuthorization(AuthorizationStatus.NotAuth));
      store.dispatch(resetUser);
    } catch(error) {
      handleError(error);
      store.dispatch(setAuthorization(AuthorizationStatus.NotAuth));
    }
  },
);
