import {AppRoute} from 'settings/app-route';
import {AuthorizationStatus} from 'settings/authorization-status';
import {createAction} from '@reduxjs/toolkit';
import {User} from 'types/user';

export const setAuthorization = createAction<AuthorizationStatus>('user/setAuthorization');

export const setErrorMessage = createAction<string>('user/setErrorMessage');

export const setUser = createAction<User>('user/setUser');

export const resetUser = createAction('user/resetUser');

export const redirectToRoute = createAction<AppRoute>('user/redirectToRoute');
