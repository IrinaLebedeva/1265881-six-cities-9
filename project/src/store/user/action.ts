import {AuthorizationStatus} from 'settings/authorization-status';
import {createAction} from '@reduxjs/toolkit';
import {User} from 'types/user';

export const setAuthorization = createAction<{authorizationStatus: AuthorizationStatus}>('user/setAuthorization');

export const setErrorMessage = createAction<{errorMessage: string}>('user/setErrorMessage');

export const setUser = createAction<User>('user/setUser');

export const resetUser = createAction('user/resetUser');
