import {AuthorizationStatus} from 'settings/authorization-status';
import {State} from 'types/state';
import {User} from 'types/user';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state.userReducer.authorizationStatus;

export const getErrorMessage = (state: State): string => state.userReducer.errorMessage;

export const getUser = (state: State): User => state.userReducer.user;
